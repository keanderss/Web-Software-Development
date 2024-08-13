import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as feedbackService from "./feedbacks.js";

const app = new Hono();

app.get("/feedbacks/:id", async (c) => {
    const id = c.req.param("id");
    if (0 < id && id < 4) {
        return c.text(`Feedback ${id}: ${await feedbackService.getFeedback(id)}`);
}});
app.post("/feedbacks/:id", async (c) => {
    const id = c.req.param("id");
    if (0 < id && id < 4) {
        await feedbackService.incrementFeedback(id);
        return c.text(`Feedback ${id}: ${await feedbackService.getFeedback(id)}`);
}});
export default app;