import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as feedbackController from "./feedbackController.js";

const app = new Hono();

app.get("/", feedbackController.renderFeedback);

app.get("/feedbacks/:id", feedbackController.getFeedback);
app.post("/feedbacks/:id", feedbackController.incrementFeedback);

app.get("/reset", feedbackController.renderReset);
app.post("/reset", feedbackController.resetFeedback);

export default app;