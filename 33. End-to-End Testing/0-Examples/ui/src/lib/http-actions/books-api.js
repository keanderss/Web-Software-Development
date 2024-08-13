import { useBookStore } from "$lib/stores/books.svelte.js";

const getBooks = async () => {
	const response = await fetch("/api/books");
	return await response.json();
};

const createBook = async (book) => {
	const response = await fetch("/api/books", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(book),
	});

	const data = await response.json();
	if (!data.error) {
		const bookStore = useBookStore();
		bookStore.addBook(data);
	}

	return data;
};

const deleteBook = async (book) => {
	const response = await fetch(`/api/books/${book.id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	});

	const bookStore = useBookStore();
	bookStore.removeBook(book);
};

export { createBook, getBooks, deleteBook };
