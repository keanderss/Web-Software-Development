import * as nameService from "./nameService.js";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const nameValidator = z.object({
	name: z.string().min(1),
}).strict();

const getNames = (c) => {
	return c.json(nameService.getNames());
};

const postName = async (c) => {
	const body = await c.req.json();
	const validationResult = nameValidator.safeParse(body);
	if (validationResult.success) {
        nameService.addName(body);
        return c.json({
            validation: "success",
        });
    }
    return c.json({
        validation: "fail",
        errors: validationResult.error.format(),
    });
};

export { getNames, postName };
