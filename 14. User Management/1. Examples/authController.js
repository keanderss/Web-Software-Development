import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
import * as scrypt from "https://deno.land/x/scrypt@v4.3.4/mod.ts";
import * as userService from "./userService.js";
import * as sessionService from "./sessionService.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const userValidator = z.object({
    email: z.coerce.string().email(),
    password: z.coerce.string().min(1, "Password must contain at least 1 character(s)"),
    verification: z.coerce.string().min(1, "Password must contain at least 1 character(s)"),
}).refine((data) => data.password === data.verification, { // An example of how you could validate that the passwords match
    message: "The provided passwords did not match.",
    path: ["password"],
});

const showRegistrationForm = (c) => {
    return c.html(eta.render("registration.eta"))
};

const registerUser = async (c) => {
    const body = await c.req.parseBody();
    const validationResult = userValidator.safeParse(body);
    if (!validationResult.success) {
        // TODO: return as partial?
        //console.log(validationResult)
        //console.log(validationResult.error)
        //console.log(validationResult.error.format())
        return c.html(eta.render("registration.eta", {
            ...body,
            errors: validationResult.error.format(),
        }))
    }

    //if (body.password != body.verification) {
    //    // TODO: return as partial?
    //    return c.text("The provided passwords did not match.");
    //}

    const existingUser = await userService.findUserByEmail(body.email)
    if (existingUser) {
        // TODO: return as partial?
        //return c.text(`A user with the email ${body.email} already exists.`);
    }

    const user = {
        id: crypto.randomUUID(),
        email: body.email,
        passwordHash: scrypt.hash(body.password),
    }

    await userService.createUser(user);
    await sessionService.createSession(c, user);

    return c.redirect("/");
};

const showLoginForm = (c) => {
    return c.html(eta.render("login.eta"));
};

const loginUser = async (c) => {
    const body = await c.req.parseBody();

    const user = await userService.findUserByEmail(body.email);
    if (!user) {
        return c.text(`No user with the email ${body.email} exists.`);
    }

    const passwordsMatch = scrypt.verify(body.password, user.passwordHash);
    if (!passwordsMatch) {
        return c.text(`Incorrect password.`);
    }

    await sessionService.createSession(c, user);

    return c.redirect("/");
};

const logoutUser = async (c) => {
    await sessionService.deleteSession(c);
    return c.redirect("/");
};

export { showRegistrationForm, registerUser, showLoginForm, loginUser, logoutUser };