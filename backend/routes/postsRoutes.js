import express from "express";
import { createPost, deletePost } from "../controllers/postsControllers.js";

const router = express.Router();




router.get('/posts', async (req, res) => {
    try{
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch(err) {
        res.status(400).json({ error: 'Error fetching all posts', details: err.message })
    }
})

router.get('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        return res.status(200).json(post);
    } catch(err) {
        res.status(400).json({ error: 'Error fetching post', details: err.message })
    }
})



router.post("/", createPost);

router.delete("/:id", deletePost);

export default router;

