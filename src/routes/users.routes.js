import express from "express";
import { createNewUser, deleteUser, selectAllusers, selectSingleuser, UpdateUser } from "../controllers/user.controller.js";
const user_route = express.Router();

user_route.post("/",createNewUser)

user_route.get("/",selectAllusers)
user_route.get("/:id",selectSingleuser)
user_route.put("/:id",UpdateUser)
user_route.delete("/:id",deleteUser)
export default user_route


