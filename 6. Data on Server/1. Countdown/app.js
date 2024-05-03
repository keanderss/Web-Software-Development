import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";

const app = new Hono();
let count = 3;

app.get("/", (c) => {
    let message = c.text(count);
    if (count > 0) {
        count--;
    } else {
        message = c.text("Kaboom!");
    }
    return message;
});

export default app;