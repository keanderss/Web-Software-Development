import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

app.post("/", async (c) => c.json(await c.req.json()));

export default app;
