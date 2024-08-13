import { sql } from "./database.js";

// Create
const createTodo = async (userId, todo) => {
    await sql`INSERT INTO todos (todo, user_id) VALUES (${ todo.todo }, ${ userId })`;
};

// Read
const listTodos = async (userId) => {
    return await sql`SELECT * FROM todos WHERE user_id = ${ userId }`;
};
  
const getTodo = async (userId, id) => {
    const rows = await sql`SELECT * FROM todos WHERE id = ${ id } AND user_id = ${ userId }`;
    return rows?.[0] ?? {};
};

// Update
const updateTodo = async (userId, id, todo) => {
    await sql`UPDATE todos SET todo = ${ todo.todo } WHERE id = ${ id } AND user_id = ${ userId }`;
};

// Delete
const deleteTodo = async (id) => {
    await sql`DELETE FROM todos WHERE id = ${ id } AND user_id = ${ userId }`;
};
  
export { createTodo, getTodo, listTodos, updateTodo, deleteTodo };