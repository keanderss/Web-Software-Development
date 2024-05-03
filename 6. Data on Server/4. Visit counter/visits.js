const getCount = async () => {
    const kv = await Deno.openKv();
    const count = await kv.get(["visits"]);
    return count.value ?? 0;
};

const incrementCount = async () => {
    let count = await getCount();
    count++;
    await setCount(count);
};

const setCount = async (count) => {
    const kv = await Deno.openKv();
    await kv.set(["visits"], count);
};

export { getCount, incrementCount }