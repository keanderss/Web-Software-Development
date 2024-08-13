// Create
const createTodo = async (userId, todo) => {
    todo.id = crypto.randomUUID();
  
    const kv = await Deno.openKv();
    await kv.set(["todos", userId, todo.id], todo);
};

// Read
const listTodos = async (userId) => {
    const kv = await Deno.openKv();
    const entries = await kv.list({ prefix: ["todos", userId] });
  
    const todos = [];
    for await (const entry of entries) {
        todos.push(entry.value);
    };
  
    return todos;
};
  
const getTodo = async (userId, id) => {
    const kv = await Deno.openKv();
    const todo = await kv.get(["todos", userId, id]);
    return todo?.value ?? {};
};

// Update
const updateTodo = async (userId, id, todo) => {
    todo.id = id;
    const kv = await Deno.openKv();
    await kv.set(["todos", userId, id], todo);
};

// Delete
const deleteTodo = async (userId, id) => {
    const kv = await Deno.openKv();
    await kv.delete(["todos", userId, id]);
};
  
export { createTodo, getTodo, listTodos, updateTodo, deleteTodo };