import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { createComment } from "../controllers/posts.js"; 

import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

// Create a new comment
router.post("/", verifyToken, createComment);

export default router;
