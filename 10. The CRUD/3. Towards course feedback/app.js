import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as feedbackController from "./feedback/feedbackController.js";
import * as courseController from "./course/courseController.js";

const app = new Hono();

app.get("/", feedbackController.renderFeedback);

app.get("/feedbacks/:id", feedbackController.getFeedback);
app.post("/feedbacks/:id", feedbackController.incrementFeedback);

app.get("/reset", feedbackController.renderReset);
app.post("/reset", feedbackController.resetFeedback);

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