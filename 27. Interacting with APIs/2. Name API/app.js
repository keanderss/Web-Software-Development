import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as nameController from "./nameController.js";

const app = new Hono();

app.get("/names", nameController.getNames);
app.post("/names", nameController.postName);

export default app;
