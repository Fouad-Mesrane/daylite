import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import { Post } from "./models/PostsModel.js";
import router from "./routes/usersRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
    res.send("API Running");
});


app.use('/api/users', router);

app.post('/api/posts', async (req, res) =>{
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

app.listen(process.env.PORT, () => {
    console.log("Server is running on port ", process.env.PORT);
    connectDB();
});