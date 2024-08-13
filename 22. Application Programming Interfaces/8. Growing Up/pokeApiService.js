const getPokemonName = async (id) => {
    const api = "https://pokeapi.co/api/v2";
    const res = await fetch(`${api}/pokemon/${id}/`);
    const data = await res.json();
    return data.name; 
};
 
const getPokemonBaseHappiness = async (id) => {
    const api = "https://pokeapi.co/api/v2";
    const res = await fetch(`${api}/pokemon-species/${id}/`);
    const data = await res.json();
    return data.base_happiness;
};

const getPokemonEvolutionChain = async (id) => {
    const api = "https://pokeapi.co/api/v2";
    const res = await fetch(`${api}/evolution-chain/${id}/`);
    const data = await res.json();
    let chain = data.chain;
    const evolutionChain = [];
    while (chain) {
        evolutionChain.push(chain.species.name);
        chain = chain.evolves_to[0];
    }
    return evolutionChain;
};
  
export { getPokemonBaseHappiness, getPokemonEvolutionChain, getPokemonName };