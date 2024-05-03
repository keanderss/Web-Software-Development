import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as feedbackController from "./feedbackController.js";

const app = new Hono();

app.get("/feedbacks/:id", feedbackController.getFeedback);
app.post("/feedbacks/:id", feedbackController.incrementAndGetFeedback);

export default app;