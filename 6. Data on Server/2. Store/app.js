import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";
import * as store from "./store.js";

const app = new Hono();

app.get("/", (c) => {
    let param = c.req.query("store") ?? store.getStore();
    if (param !== null) {
        store.setStore(param)
    }
    return c.text(`Store: ${store.getStore()}`);
});

export default app;