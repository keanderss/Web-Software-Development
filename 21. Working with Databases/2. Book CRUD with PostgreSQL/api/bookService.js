import { sql } from "./database.js";

// Create
const createBook = async (book) => {
    await sql`INSERT INTO books (name, pages, isbn) VALUES (${ book.name }, ${ book.pages }, ${ book.isbn })`;
};

// Read
const listBooks = async () => {
    return await sql`SELECT * FROM books`;
};
  
const getBook = async (id) => {
    const rows = await sql`SELECT * FROM books WHERE id = ${ id }`;
    return rows?.[0] ?? {};
};

// Update
const updateBook = async (id, book) => {
    await sql`UPDATE books SET name = ${ book.name }, pages = ${ book.pages }, isbn = ${ book.isbn } WHERE id = ${ id }`;
};

// Delete
const deleteBook = async (id) => {
    await sql`DELETE FROM books WHERE id = ${ id }`;
};
  
export { createBook, getBook, listBooks, updateBook, deleteBook };