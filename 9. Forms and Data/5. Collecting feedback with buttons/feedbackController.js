import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import * as feedbackService from "./feedbackService.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` })

const renderFeedback = async (c) => {
    return c.html(eta.render("index.eta"));
}

const renderReset = async (c) => {
    return c.html(eta.render("reset.eta"));
}

const getFeedback = async (c) => {
    const id = c.req.param("id");
    if (0 < id && id < 6) {
        return c.text(`Feedback: ${await feedbackService.getFeedback(id)}`);
    }
}

const incrementFeedback = async (c) => {
    const id = c.req.param("id");
    if (0 < id && id < 6) {
        await feedbackService.incrementFeedback(id);
        return c.redirect("/");
    }
}

const resetFeedback = async (c) => {
    for (let id = 1; id < 6; id++) {
        feedbackService.setFeedback(id, 0)
    }
    return c.redirect("/");
}

export { getFeedback, incrementFeedback, renderFeedback, resetFeedback, renderReset };