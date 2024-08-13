import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import * as feedbackService from "./feedbacks.js";
import * as courseController from "./courseController.js";

const app = new Hono();
const eta = new Eta({ views: `${Deno.cwd()}/templates` })

app.get("/", (c) => {
    return c.html(eta.render("index.eta"));
});

app.get("/feedbacks/:id", async (c) => {
    const id = c.req.param("id");
    if (0 < id && id < 6) {
        return c.text(`Feedback ${id}: ${await feedbackService.getFeedback(id)}`);
    }
});
app.post("/feedbacks/:id", async (c) => {
    const id = c.req.param("id");
    if (0 < id && id < 6) {
        await feedbackService.incrementFeedback(id);
        return c.redirect("/");
    }
});

// Create
app.post("/courses", courseController.createCourse);

// Read
app.get("/courses", courseController.showForm);
app.get("/courses/:id", courseController.showCourse);

// Update
app.post("/courses/:id", courseController.updateCourse);

// Delete
app.post("/courses/:id/delete", courseController.deleteCourse);

export default app;