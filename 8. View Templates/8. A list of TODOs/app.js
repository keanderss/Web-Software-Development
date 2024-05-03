import { Eta } from "https://deno.land/x/eta@v3.1.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

const data = {
  todos: [{ 
      todo: "Write a TODO app",
      status: false,
    }, { 
      todo: "Show a list of TODOs",
      status: true,
    }, { 
      todo: "Move TODOs to a database",
      status: false,
    }, { 
      todo: "Allow marking TODOs done",
      status: false,
    },
  ],
};

app.get("/", (c) => {
  return c.html(eta.render("index.eta", data));
});

export default app;