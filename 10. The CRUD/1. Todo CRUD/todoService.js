// Create
const createTodo = async (todo) => {
    todo.id = crypto.randomUUID();
  
    const kv = await Deno.openKv();
    await kv.set(["todos", todo.id], todo);
};

// Read
const listTodos = async () => {
    const kv = await Deno.openKv();
    const entries = await kv.list({ prefix: ["todos"] });
  
    const todos = [];
    for await (const entry of entries) {
        todos.push(entry.value);
    };
  
    return todos;
};
  
const getTodo = async (id) => {
    const kv = await Deno.openKv();
    const todo = await kv.get(["todos", id]);
    return todo?.value ?? {};
};

// Update
const updateTodo = async (id, todo) => {
    todo.id = id;
    const kv = await Deno.openKv();
    await kv.set(["todos", id], todo);
};

// Delete
const deleteTodo = async (id) => {
    const kv = await Deno.openKv();
    await kv.delete(["todos", id]);
};
  
export { createTodo, getTodo, listTodos, updateTodo, deleteTodo };