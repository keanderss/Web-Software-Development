import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import * as feedbackService from "./feedbacks.js";
import * as courseController from "./courseController.js";

const app = new Hono();
const eta = new Eta({ views: `${Deno.cwd()}/templates` })

app.get("/courses/:courseId/feedbacks/:id", async (c) => {
    const id = c.req.param("id");
    const courseId = c.req.param("courseId");
    if (0 < id && id < 6) {
        return c.text(`Feedback ${id}: ${await feedbackService.getFeedback(courseId, id)}`);
    }
});
app.post("/courses/:courseId/feedbacks/:id", async (c) => {
    const id = c.req.param("id");
    const courseId = c.req.param("courseId");
    if (0 < id && id < 6) {
        await feedbackService.incrementFeedback(courseId, id);
        return c.redirect(`/courses/${courseId}`);
    }
});

// Create
app.post("/courses", courseController.createCourse);

// Read
app.get("/courses", courseController.showForm);
app.get("/courses/:courseId", courseController.showCourse);

// Update
app.post("/courses/:courseId", courseController.updateCourse);

// Delete
app.post("/courses/:courseId/delete", courseController.deleteCourse);

export default app;