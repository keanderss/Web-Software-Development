import { json } from "@sveltejs/kit";

export const GET = async ({ params }) => {
	return json({ hello: "world", random: Math.random(), id: params.id });
};
