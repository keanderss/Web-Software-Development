import { eta } from "../config/etaConfig.js";
import * as sessionService from "../auth/sessionService.js";
import { htmlWithUser } from "../utils/renderUtils.js";

//const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const showMain = async (c) => {
    //return c.html(eta.render("main.eta", {
    //    user: await sessionService.getUserFromSession(c),
    //}));
    return await htmlWithUser(c, "main.eta");
};

export { showMain };