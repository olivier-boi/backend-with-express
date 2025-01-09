import express from "express";
import { deleteinfo, information,selectallblogs, selectsingleblogs, Updateblogs } from "../controllers/task.controller.js";
const task_route = express.Router();

task_route.post("/",information)
task_route.get("/",selectallblogs)
task_route.get("/:id",selectsingleblogs)
task_route.put("/:id",Updateblogs)
task_route.delete("/:id",deleteinfo)

export default task_route


