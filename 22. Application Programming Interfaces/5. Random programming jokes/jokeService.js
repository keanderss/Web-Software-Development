const fetchRandomJoke = async () => {
    const response = await fetch("https://simple-joke-api.deno.dev/random", {
        method: "GET",
    });
    return response.json();
  };
  
  export { fetchRandomJoke };
  