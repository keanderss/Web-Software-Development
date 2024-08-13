import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as feedbackController from "./feedback/feedbackController.js";
import * as courseController from "./course/courseController.js";

const app = new Hono();

app.get("/courses/:courseId/feedbacks/:id", feedbackController.getFeedback);
app.post("/courses/:courseId/feedbacks/:id", feedbackController.incrementFeedback);

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