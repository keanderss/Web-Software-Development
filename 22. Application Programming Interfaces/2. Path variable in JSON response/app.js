import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

app.get("/secret/:secret", async (c) => {
    const response = {
        secret: await c.req.param("secret"),
    };
    return c.json(response);
});

export default app;
