<script>
	let { title, description, link } = $props();

    const buttonClick = () => {
        location.href=link;
    }
</script>

<div class="card w-96 bg-base-100 shadow-xl">
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p>{description}</p>
		<div class="card-actions justify-end">
			<button on:click={buttonClick} class="btn btn-primary">Go!</button>
		</div>
	</div>
</div>
