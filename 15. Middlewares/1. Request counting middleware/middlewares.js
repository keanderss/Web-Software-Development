let count = 0;

const requestCountingMiddleware = async (c, next) => {
    if (c.req.path !== "/x-request-count" && c.req.method !== "GET" ) {
        return c.text(count);
    } 
    
    count++;
    await next();
    // without adding a request path to app.js
    // theres really only one way to do this...
};

export { requestCountingMiddleware };
