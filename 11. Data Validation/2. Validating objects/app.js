import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const bookValidator = z.object({
  name: z.string(),
  pages: z.number().min(1),
  isbn: z.string(),
});

const personValidator = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
});

const courseValidator = z.object({
  name: z.string(),
  teacher: personValidator,
  book: bookValidator,
});

export { bookValidator, personValidator, courseValidator };