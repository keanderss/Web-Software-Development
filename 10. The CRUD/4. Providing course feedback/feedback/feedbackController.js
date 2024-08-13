import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import * as feedbackService from "./feedbackService.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates` })

const renderFeedback = (c) => {
    return c.html(eta.render("index.eta"));
}

const getFeedback = async (c) => {
    const id = c.req.param("id");
    const courseId = c.req.param("courseId");
    if (0 < id && id < 6) {
        return c.text(`Feedback ${id}: ${await feedbackService.getFeedback(courseId, id)}`);
    }
}

const incrementFeedback = async (c) => {
    const id = c.req.param("id");
    const courseId = c.req.param("courseId");
    if (0 < id && id < 6) {
        await feedbackService.incrementFeedback(courseId, id);
        return c.redirect(`/courses/${courseId}`);
    }
}

export { getFeedback, incrementFeedback, renderFeedback };