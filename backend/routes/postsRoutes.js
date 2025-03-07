import express from "express";
import {
  createPost,
  deletePost,
  getPostById,
  getAllPosts,
} from "../controllers/postsControllers.js";

const router = express.Router();

router.get("/", getAllPosts);

router.get("/:id", getPostById);

router.post("/", createPost);

router.delete("/:id", deletePost);

export default router;
