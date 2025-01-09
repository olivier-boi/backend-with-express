import express from "express";
import user_route from "./users.routes.js";
import post1 from "./posts.routes.js"
import task_route from "./tasks.route.js";
const route = express.Router()


route.use("/users", user_route)
route.use("/posts",post1)
route.use("/tasks",task_route)


export default route