<script>
    let id = $state(0);

    let name = $state("");
    let height = $state(0);
    let weight = $state(0);

    const api = "https://pokeapi.co/api/v2";

    const fetchPokemon = async () => {
        const res = await fetch(`${api}/pokemon/${id}/`);
        const data = await res.json();
        name = data.name;
        height = data.height;
        weight = data.weight; 
    }
</script>
<label for="id">Pokémon id:</label>
<input id="id" type="number" min="1" max="1025" bind:value={id}>
<button on:click={fetchPokemon}>Query API</button>

<p>Name: {name}</p>
<p>Height: {height}</p>
<p>Weight: {weight}</p>

