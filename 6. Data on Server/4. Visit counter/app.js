import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";
import * as visits from "./visits.js"

const app = new Hono();

app.get("/", async (c) => {
    await visits.incrementCount();
    return c.text("Hello world!");
}); 

app.get("/visits", async (c) => c.text(`Visit count: ${await visits.getCount()}`));

export default app;