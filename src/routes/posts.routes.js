import express from "express";
import { createNewpost } from "../controllers/post.controller.js";
const post1 = express.Router();

post1.post("/", createNewpost)


export default post1