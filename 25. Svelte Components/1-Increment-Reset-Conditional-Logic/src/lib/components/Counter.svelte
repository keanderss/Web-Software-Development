<script>
    let count = $state(0);
    
    let incrementCount = () => {
        count++;
    };
    
    let resetCount = () => {
        count = 0;
    };

    const fetchJoke = async () => {
        const response = await fetch("https://simple-joke-api.deno.dev/random");
        return await response.json();
    };
</script>

<h1>Count: {count}</h1>

<button on:click={incrementCount}>Increment</button>
<button on:click={resetCount}>Reset</button>

{#if count === 1}
    {#await fetchJoke()}
        <p>Click, clickiti click click click.</p>
    {:then joke}
        <p>{joke.setup}</p>
        <p>{joke.punchline}</p>
    {/await}
{:else if count === 5}
    <p>I know I'll get tired of these clicking exercises.</p>
{/if}
