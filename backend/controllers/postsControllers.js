import {Post} from "../models/PostsModel.js"





export const getAllPosts = async (req, res) => {
    try{
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch(err) {
        res.status(400).json({ error: 'Error fetching all posts', details: err.message })
    }
}


export const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        return res.status(200).json(post);
    } catch(err) {
        res.status(400).json({ error: 'Error fetching post', details: err.message })
    }
}
export const createPost =  async (req, res) =>{
    try{
        const newPost = new Post({
            content: req.body.content
        })
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    } catch(err) {
        res.status(400).json({err: 'Error creating post', details: err.message})
    }
}



export const deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Post deleted successfully"})
    } catch(err) {
        res.status(400).json({ err: 'Error deleting post', details: err.message})
    }
}
