import express from "express"
import { createPost } from "../controllers/postController.js"
import { getAllPosts } from "../controllers/postController.js"
import { getPostById } from "../controllers/postController.js"
import { updatePost } from "../controllers/postController.js"
import { deletePost } from "../controllers/postController.js"

const router = express.Router()

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     tags:
 *       - Posts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Learning Node.js"
 *               body:
 *                 type: string
 *                 example: "Today I learned about Express."
 *               category:
 *                 type: string
 *                 description: "MongoDB ObjectId of an existing category"
 *                 example: "685cf7c8f7d3abc12345678"
 *     responses:
 *       201:
 *         description: Post created successfully
 */
router.post("/", createPost)

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Get all posts
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter posts by Category ID
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         required: false
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         required: false
 *         description: Number of posts per page
 *     responses:
 *       200:
 *         description: List of posts retrieved successfully
 */
router.get("/", getAllPosts)

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Get a single post
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Post ID
 *     responses:
 *       200:
 *         description: Post retrieved successfully
 *       404:
 *         description: Post not found
 */
router.get("/:id", getPostById)

/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     summary: Update a post
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Post ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - body
 *               - category
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Updated Node.js"
 *               body:
 *                 type: string
 *                 example: "Updated blog content."
 *               category:
 *                 type: string
 *                 example: "685cf7c8f7d3abc12345678"
 *     responses:
 *       200:
 *         description: Post updated successfully
 *       404:
 *         description: Post not found
 */
router.put("/:id", updatePost)

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Delete a post
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Post ID
 *     responses:
 *       200:
 *         description: Post deleted successfully
 *       404:
 *         description: Post not found
 */
router.delete("/:id", deletePost)

export default router