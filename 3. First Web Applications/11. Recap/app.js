const handleRequest = (request) => {
    const url = new URL(request.url);
    const params = url.searchParams;
    
    if (request.method === "GET") {
        if (url.pathname === "/") {
            return new Response("Hi there!");
        } else if (url.pathname === "/congrats") {
            return new Response(`Congrats, ${params.get("heroOfTheDay")}!`);
        }
    } else if (request.method === "DIDNOT") {
        if (url.pathname === "/lol") {
            return new Response("What kind of tree fits in your hand? A palm tree.");
        }
    }
    
    return new Response("Not here.");
  };
  
  Deno.serve(handleRequest);    