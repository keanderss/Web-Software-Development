import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
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

// In addition to the paths,
// also adjust the application so that for each book,
// you store the name,
// the number of pages,
// and the ISBN.

// As labels for the form fields,
// use "Book name:", DONE!
// "Number of pages:", DONE!
// and "ISBN:". DONE!

// For the button labels, DONE!
// use "Add" for adding a book, DONE!
// "Delete" for deleting a book, DONE!
// and "Update" for updating a book. DONE!