import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";


const app = express();

app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
    res.send("API Running");
});

app.listen(process.env.PORT, () => {
    console.log("Server is running on port ", process.env.PORT);
    connectDB();
});