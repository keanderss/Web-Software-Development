const handleRequest = (request) => {
    const url = new URL(request.url)
    const path = url.pathname
    let message = "You requested the path "
    
    return new Response(message + path);
  };
  
  Deno.serve(handleRequest);