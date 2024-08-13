import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as emailController from "./emailController.js";

const app = new Hono();

app.get("/", emailController.showForm);

app.post("/emails", emailController.validateEmail);

export default app;