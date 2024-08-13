import * as sessionService from "./sessionService.js";
import {
    getSignedCookie,
    setSignedCookie,
} from "https://deno.land/x/hono@v3.12.11/helper.ts";

const secret = `${sessionService.getSecret()}`;

const setFeedbackCookie = async (c) => {
    const courseId = c.req.param("courseId")
    const sessionId = await getSignedCookie(c, secret, "sessionId") ?? crypto.randomUUID();
    await setSignedCookie(c, "sessionId", sessionId, secret, {
        path: "/",
    });
    await sessionService.setFeedbackCookie(sessionId, courseId);
}

const getFeedbackCookie = async (c) => {
    const courseId = c.req.param("courseId");
    const sessionId = await getSignedCookie(c, secret, "sessionId") ?? crypto.randomUUID();
    await setSignedCookie(c, "sessionId", sessionId, secret, {
        path: "/",
    });
    return await sessionService.getFeedbackCookie(sessionId, courseId);
}

export { setFeedbackCookie, getFeedbackCookie };