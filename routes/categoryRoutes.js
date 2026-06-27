import express from "express"
import { createCategory } from "../controllers/categoryController.js"
import { getAllCategories } from "../controllers/categoryController.js";
import { getCategoryById } from "../controllers/categoryController.js";

const router = express.Router()

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a new category
 *     tags:
 *       - Categories
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Technology"
 *     responses:
 *       201:
 *         description: Category created successfully
 */
router.post("/", createCategory)

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all categories
 *     tags:
 *       - Categories
 *     responses:
 *       200:
 *         description: List of all categories
 */
router.get("/", getAllCategories)
router.get("/:idb", getCategoryById)

export default router