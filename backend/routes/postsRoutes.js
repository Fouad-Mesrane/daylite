import express from "express";
import { createPost, deletePost } from "../controllers/postsControllers.js";

const router = express.Router();

router.post("/", createPost);

router.delete("/:id", deletePost);

export default router;
