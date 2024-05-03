const getFeedback = async (id) => {
    const kv = await Deno.openKv();
    const feedback = await kv.get([`${id}`]);
    return feedback.value ?? 0;
};

const incrementFeedback = async (id) => {
    let value = await getFeedback(id);
    value++;
    await setFeedback(id, value);
};

const setFeedback = async (id, value) => {
    const kv = await Deno.openKv();
    await kv.set([`${id}`], value);
};

export { getFeedback, setFeedback , incrementFeedback }