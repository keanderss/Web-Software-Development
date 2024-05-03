const handleRequest = (request) => {
    const url = new URL(request.url);
    const params = url.searchParams;
    const one = Number(params.get("number1"));
    const two = Number(params.get("number2"));
    
    let message = "Invalid parameters."
    if (params.size === 3) {
        if (params.get("operation") === "sum") {
            return new Response(`${one + two}`);
        } else if (params.get("operation") === "product") {
            return new Response(`${one * two}`);
        }
    }

    return new Response(message);
};

Deno.serve(handleRequest);