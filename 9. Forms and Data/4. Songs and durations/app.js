import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";
import * as songController from "./songController.js";

const app = new Hono();

app.get("/", songController.listSongs);
app.post("/songs", songController.addSongAndListSongs);

export default app;