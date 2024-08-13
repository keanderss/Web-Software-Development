<script>
    let password = $state("");
    let disabled = $state(true);
    let clicked = $state(false);

    const checkPassword = () => {
        clicked = false;
        if (password === "AW96B6" || password === "Alohomora") {
            disabled = false;
        } else {
            disabled = true;
        }
    };

    const showText = () => {
        clicked = true;
    }
</script>

<label for="password">Enter the secret password:</label>
<input id="password" type="password" bind:value={password} on:input={checkPassword}/>
<button on:click={showText} {disabled}>show text</button>


{#if clicked && password === "AW96B6"}
    <p>Impossible!</p>
{:else if clicked && password === "Alohomora"}
    <p>Opening up!</p>
{/if}
