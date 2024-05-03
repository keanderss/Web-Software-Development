import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";

const app = new Hono();

app.get("/", (c) => {
    const operation = c.req.query("operation");
    const number1 = parseInt(c.req.query("number1"));
    const number2 = parseInt(c.req.query("number2"));
    let message = "Invalid parameters."
    if (operation === "sum") {
        message = number1 + number2
    } else if (operation === "difference") {
        message = number1 - number2
    }
    return c.text(message);
});

export default app;