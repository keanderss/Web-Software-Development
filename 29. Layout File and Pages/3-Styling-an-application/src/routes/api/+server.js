import { json } from '@sveltejs/kit';

export const GET = async () => {
  return json({ hello: "world", random: Math.random() });
}

export const POST = async () => {
  return json({ hello: "world", random: Math.random() });
}