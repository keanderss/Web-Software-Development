import { Eta } from "https://deno.land/x/eta@v3.1.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

app.get("/", (c) => {
  return c.html(eta.render("index.eta"));
});
app.post("/addresses", async (c) => {
    const body = await c.req.parseBody();
    return c.text(`${body.name} lives at ${body.address}.`)
});

export default app;