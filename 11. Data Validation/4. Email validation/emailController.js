import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const eta = new Eta({ views: "templates" });


const validator = z.object({
    email: z.string().email({ message: "Not a valid email, try again." }),
});

const showForm = async (c) => c.html(eta.render("index.eta"));

const validateEmail = async (c) => {
    const body = await c.req.parseBody();
    const validationResult = validator.safeParse(body);
    if (!validationResult.success) {
        return c.html(
             eta.render("index.eta", {
                 ...body,
                 errors: validationResult.error.format()
             })
        );
    }

    return c.text("Valid email, thank you!");
}

export { showForm, validateEmail }