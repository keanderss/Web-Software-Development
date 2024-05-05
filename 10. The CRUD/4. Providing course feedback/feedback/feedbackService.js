const getFeedback = async (courseId, id) => {
    const kv = await Deno.openKv();
    const feedback = await kv.get(["feedback", courseId, id]);
    return feedback.value ?? 0;
};

const incrementFeedback = async (courseId, id) => {
    let value = await getFeedback(courseId, id);
    value++;
    await setFeedback(courseId, id, value);
};

const setFeedback = async (courseId, id, value) => {
    const kv = await Deno.openKv();
    await kv.set(["feedback", courseId, id], value);
};

export { getFeedback, setFeedback , incrementFeedback }