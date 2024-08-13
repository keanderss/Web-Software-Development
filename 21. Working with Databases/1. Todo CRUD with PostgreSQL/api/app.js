import { Hono } from "./deps.js";
import * as todoController from "./todoController.js";

const app = new Hono();

// Create
app.post("/todos", todoController.createTodo);

// Read
app.get("/todos", todoController.showForm);
app.get("/todos/:id", todoController.showTodo);

// Update
app.post("/todos/:id", todoController.updateTodo);

// Delete
app.post("/todos/:id/delete", todoController.deleteTodo);

export default app;