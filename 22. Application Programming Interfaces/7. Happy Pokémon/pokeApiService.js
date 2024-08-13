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
  
export { getPokemonBaseHappiness, getPokemonName };
  