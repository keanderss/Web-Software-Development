import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";

const app = new Hono();

app.get(
  "/restaurants",
  (c) => {
    return c.text("Listing restaurants.");
  },
);

app.post(
  "/restaurants",
  (c) => {
    return c.text("Adding a restaurant.");
  },
);

app.get(
  "/restaurants/:id",
  (c) => {
    const id = c.req.param("id");
    return c.text(`Showing restaurant with id ${id}.`);
  },
);

app.get(
  "/restaurants/:id/reviews",
  (c) => {
    const id = c.req.param("id");
    return c.text(`Listing reviews for restaurant with id ${id}.`);
  },
);

app.post(
  "/restaurants/:id/reviews",
  (c) => {
    const id = c.req.param("id");
    return c.text(`Adding a review for restaurant with id ${id}.`);
  },
);

app.on(
  "delete", "/restaurants/:id/reviews/:rid",
  (c) => {
    const id = c.req.param("id");
    const rid = c.req.param("rid");
    return c.text(`Removing review ${rid} from restaurant with id ${id}.`);
  },
);

export default app;