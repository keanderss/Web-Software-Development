const handleRequest = (request) => {
    const url = new URL(request.url);
    const params = url.searchParams;
    let title = "princess"
    let name = "Tove"
    if (params.get("title") !== null) {
        title = params.get("title")
    }
    if (params.get("name") !== null) {
        name = params.get("name")
    }
    return new Response(`Once upon a time, there was a ${title} called ${name}.`);
  };
  
  Deno.serve(handleRequest);