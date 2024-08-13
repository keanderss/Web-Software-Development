import { sql } from "./database.js";

const findUserByEmail = async (email) => {
    const rows = await sql`SELECT * FROM users WHERE email = ${email}`;
    return rows?.[0];
};

const createUser = async (user) => {
  await sql`INSERT INTO users (email, password_hash) VALUES (${user.email}, ${user.passwordHash})`;
};
  
export { findUserByEmail, createUser };