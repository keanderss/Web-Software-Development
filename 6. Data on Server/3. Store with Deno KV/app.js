import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";
import * as store from "./store.js";

const app = new Hono();

app.get("/", async (c) => {
  if (c.req.query("store")) {
    await store.setStore(c.req.query("store"));
  }

  return c.text(`Store: ${await store.getStore()}`);
});

export default app;