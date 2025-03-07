import express from "express";
import { createUser, getUserById, getAllUsers } from "../controllers/usersControllers.js";

const router = express.Router();


router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getUserById);

export default router;