import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
import * as courseService from "./courseService.js";
import * as sessionController from "../session/sessionController.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const courseValidator = z.object({
    name: z.coerce.string().min(4, { message: "The course name should be a string of at least 4 characters." }),
});

// Create
const createCourse = async (c) => {
    const body = await c.req.parseBody();
    const validationResult = courseValidator.safeParse(body);
    if (!validationResult.success) {
        return c.html(
            eta.render("courses.eta", {
                ...body,
                errors: validationResult.error.format(),
                courses: await courseService.listCourses(),
            })
        )
    } else {
        await courseService.createCourse(body);
        return c.redirect("/courses");
    }
};

// Read
const showForm = async (c) => {
    return c.html(
        eta.render("courses.eta", { courses: await courseService.listCourses() }),
    );
};    

const showCourse = async (c) => {
    const id = c.req.param("courseId");
    const course = await courseService.getCourse(id);
    const feedbackGiven = await sessionController.getFeedbackCookie(c);
    return c.html(
        eta.render("course.eta", { feedbackGiven, course }),
    );
};

// Update
const updateCourse = async (c) => {
    const id = c.req.param("courseId");
    const body = await c.req.parseBody();
    await courseService.updateCourse(id, body);
    return c.redirect(`/courses/${id}`);
};

// Delete
const deleteCourse = async (c) => {
    const id = c.req.param("courseId");
    await courseService.deleteCourse(id);
    return c.redirect("/courses");
};

export { createCourse, showForm, showCourse, updateCourse, deleteCourse };