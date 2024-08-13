import { Hono } from "./deps.js";
import * as todoController from "./todo/todoController.js";
import * as authController from "./auth/authController.js";
import * as mainController from "./main/mainController.js";
import * as middlewares from "./middlewares/middlewares.js";

const app = new Hono();

app.use("*", middlewares.addUserToContextMiddleware);
app.use("/todos/*", middlewares.accessControlMiddleware);

// Create
app.post("/todos", todoController.createTodo);

// Read
app.get("/todos", todoController.showForm);
app.get("/todos/:id", todoController.showTodo);

// Update
app.post("/todos/:id", todoController.updateTodo);

// Delete
app.post("/todos/:id/delete", todoController.deleteTodo);


app.get("/auth/registration", authController.showRegistrationForm);
app.post("/auth/registration", authController.registerUser);
app.get("/auth/login", authController.showLoginForm);
app.post("/auth/login", authController.loginUser);
app.get("/", mainController.showMain);
app.post("/auth/logout", authController.logoutUser);

export default app;
