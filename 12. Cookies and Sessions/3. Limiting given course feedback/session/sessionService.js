const setFeedbackCookie = async (sessionId, courseId) => {
    const kv = await Deno.openKv();
    await kv.set(["feedbackGiven", sessionId, courseId], true);
}

const getFeedbackCookie = async (sessionId, courseId) => {
    const kv = await Deno.openKv();
    const feedbackGiven = await kv.get(["feedbackGiven", sessionId, courseId]);
    return feedbackGiven.value ?? false;
}

const getSecret = async () => {
    const kv = await Deno.openKv();
    return await kv.get(["secret"]) ?? setSecret;
}

const setSecret = async () => {
    const kv = await Deno.openKv();
    await kv.set(["secret", crypto.randomUUID]);
    return await kv.get(["secret"]);
}

export { setFeedbackCookie, getFeedbackCookie, getSecret };
