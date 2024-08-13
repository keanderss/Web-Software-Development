import { Eta } from "./deps.js";
import { z } from "./deps.js";
import * as bookService from "./bookService.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const bookValidator = z.object({
    name: z.coerce.string().min(3, { message: "The book name should be a string of at least 3 characters." }),
    // Same error message on all conditions
    pages: z.coerce.number({ invalid_type_error: "The number of pages should be a number between 1 and 1000."}
    ).gte(1, {message: "The number of pages should be a number between 1 and 1000."}
    ).lte(1000, {message: "The number of pages should be a number between 1 and 1000."}
    ).int(),
    isbn: z.coerce.string().length(13, {message: "The ISBN should be a string of 13 characters."})
});

// Create
const createBook = async (c) => {
    const body = await c.req.parseBody();
    const validationResult = bookValidator.safeParse(body);
    if (!validationResult.success) {
        return c.html(
            eta.render("books.eta", {
                ...body,
                errors: validationResult.error.format(),
                books: await bookService.listBooks(),
            })  
        );
    } else {
        await bookService.createBook(body);
        return c.redirect("/books");
    }
};

// Read
const showForm = async (c) => {
    return c.html(
        eta.render("books.eta", { books: await bookService.listBooks() }),
    );
};    

const showBook = async (c) => {
    const id = c.req.param("id");
    return c.html(
        eta.render("book.eta", { book: await bookService.getBook(id) }),
    );
};

// Update
const updateBook = async (c) => {
    const id = c.req.param("id");
    const body = await c.req.parseBody();
    const validationResult = bookValidator.safeParse(body);
    if (!validationResult.success) {
        return c.html(
            eta.render("book.eta", {
                book: body,
                errors: validationResult.error.format(),
            })  
        );
    } else {
        await bookService.updateBook(id, body);
        return c.redirect(`/books/${id}`);
    }
};

// Delete
const deleteBook = async (c) => {
    const id = c.req.param("id");
    await bookService.deleteBook(id);
    return c.redirect("/books");
};

export { createBook, showForm, showBook, updateBook, deleteBook };