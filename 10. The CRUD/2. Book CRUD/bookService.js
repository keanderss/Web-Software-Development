// Create
const createBook = async (book) => {
    book.id = crypto.randomUUID();
  
    const kv = await Deno.openKv();
    await kv.set(["books", book.id], bookName, pageCount, bookISBN);
};

// Read
const listBooks = async () => {
    const kv = await Deno.openKv();
    const entries = await kv.list({ prefix: ["books"] });
  
    const books = [];
    for await (const entry of entries) {
        books.push(entry.value);
    };
  
    return books;
};
  
const getBook = async (id) => {
    const kv = await Deno.openKv();
    const book = await kv.get(["books", id]);
    return book?.value ?? {};
};

// Update
const updateBook = async (id, book) => {
    book.id = id;
    const kv = await Deno.openKv();
    await kv.set(["books", id], book);
};

// Delete
const deleteBook = async (id) => {
    const kv = await Deno.openKv();
    await kv.delete(["books", id]);
};
  
export { createBook, getBook, listBooks, updateBook, deleteBook };