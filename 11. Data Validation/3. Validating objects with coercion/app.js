import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const bookValidator = z.object({
  name: z.string(),
  pages: z.coerce.number().min(1),
});

const personValidator = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.coerce.number().min(0).max(120),
});

export { bookValidator, personValidator };