<script>
	import Book from "./Book.svelte";
	import { useBookStore } from "$lib/stores/books.svelte.js";
	import { deleteBook } from "$lib/http-actions/books-api.js";

	let selectedBook = $state(null);

	const bookStore = useBookStore();

	const removeBook = async (book) => {
		await deleteBook(book);
		if (book === selectedBook) {
			selectedBook = null;
		}
	};
</script>

<h1>Books</h1>

<ul>
	{#each bookStore.books as book}
		<li>
			{book.name} <button on:click={() => (selectedBook = book)}>View</button>
			<button on:click={() => removeBook(book)}>Delete</button>
		</li>
	{/each}
</ul>

{#if selectedBook}
	<Book book={selectedBook} />
	<button on:click={() => (selectedBook = null)}>Clear</button>
{/if}
