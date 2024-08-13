<script>
    let inputValue = $state("");
    let items = $state([]);

    const addItem = () => {
        items[items.length] = inputValue;
        inputValue = "";
    };
</script>

<label for="item">Type in the item name:</label>
<input id="item" type="text" bind:value={inputValue}/><br/>
<button disabled={inputValue === ""} on:click={addItem}>Add</button>
{#if items.length === 1}
    <p>The list has {items.length} item.</p>
{:else}
    <p>The list has {items.length} items.</p>
{/if}
<p>Items:</p>

<ul>
    {#each items as item}
        <li>{item}</li>
    {/each}
</ul>