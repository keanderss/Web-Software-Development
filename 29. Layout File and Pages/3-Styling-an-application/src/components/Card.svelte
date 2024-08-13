<script>
	let { title, description, link } = $props();
</script>

<div
	class="card w-96 bg-gradient-to-br from-base-200 to-gray-800 shadow-xl m-1 min-w-60"
>
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p>{description}</p>
		<div class="card-actions justify-end">
			<button on:click={() => (location.href = link)} class="btn btn-primary"
				>Go!</button
			>
		</div>
	</div>
</div>
