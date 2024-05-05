import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import * as courseService from "./courseService.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

// Create
const createCourse = async (c) => {
    const body = await c.req.parseBody();
    await courseService.createCourse(body);
    return c.redirect("/courses");
};

// Read
const showForm = async (c) => {
    return c.html(
        eta.render("courses.eta", { courses: await courseService.listCourses() }),
    );
};    

const showCourse = async (c) => {
    const id = c.req.param("id");
    return c.html(
        eta.render("course.eta", { course: await courseService.getCourse(id) }),
    );
};

// Update
const updateCourse = async (c) => {
    const id = c.req.param("id");
    const body = await c.req.parseBody();
    await courseService.updateCourse(id, body);
    return c.redirect(`/courses/${id}`);
};

// Delete
const deleteCourse = async (c) => {
    const id = c.req.param("id");
    await courseService.deleteCourse(id);
    return c.redirect("/courses");
};

export { createCourse, showForm, showCourse, updateCourse, deleteCourse };