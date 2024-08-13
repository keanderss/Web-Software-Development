import { json } from "@sveltejs/kit";
import { books } from "../book-data.js";

export const DELETE = async ({ params }) => {
	const index = books.findIndex((book) => book.id == params.id);
	if (index !== -1) {
		const book = books.splice(index, 1);
		return json(book, { status: 200 });
	}
	return json({ status: 404 });
};
