import { Hono } from "./deps.js";
import * as bookController from "./bookController.js";

const app = new Hono();

// Create
app.post("/books", bookController.createBook);

// Read
app.get("/books", bookController.showForm);
app.get("/books/:id", bookController.showBook);

// Update
app.post("/books/:id", bookController.updateBook);

// Delete
app.post("/books/:id/delete", bookController.deleteBook);

export default app;