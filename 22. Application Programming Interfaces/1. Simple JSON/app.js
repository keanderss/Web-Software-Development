import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

const data = {
    hello: "world",
};

app.get("/", (c) => c.json(data));

export default app;
