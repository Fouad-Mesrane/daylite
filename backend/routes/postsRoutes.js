import express from "express";
import { Post } from "../models/PostsModel.js";

const router = express.Router();

// New post

router.post('/posts', async (req, res) =>{
    try{
        const newPost = new Post({
            content: req.body.content
        })
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    } catch(err) {
        res.status(400).json({err: 'Error creating post', details: err.message})
    }
});

// Delete post by id

router.delete('/posts/:id', async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Post deleted successfully"})
    } catch(err) {
        res.status(400).json({ error: 'Error deleting post', details: err.message})
    }
});

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

export default router