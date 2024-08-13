import * as feedbackService from "./feedbackService.js";

const getFeedback = async (c) => {
    const id = c.req.param("id");
    if (0 < id && id < 4) {
        return c.text(`Feedback ${id}: ${await feedbackService.getFeedback(id)}`);
    }
}

const incrementAndGetFeedback = async (c) => {
    const id = c.req.param("id");
    if (0 < id && id < 4) {
        await feedbackService.incrementFeedback(id);
        return c.text(`Feedback ${id}: ${await feedbackService.getFeedback(id)}`);
    }
}

export { getFeedback, incrementAndGetFeedback };