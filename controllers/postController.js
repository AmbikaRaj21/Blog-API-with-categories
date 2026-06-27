import Post from "../models/Post.js";
import Category from "../models/Category.js";
import mongoose from "mongoose";

// create post
export const createPost = async (req, res) => {
    try {
        const { title, body, category } = req.body

        if(!title || !body || !category) {
            return res.status(400).json({
                success: false,
                message: "Title, body and category are required",
            })
        }

        // check if category exists
        const existingCategory = await Category.findById(category)

        if (!existingCategory) {
            return res.status(404).json({
                success: false,
                message: "Category not found",
            })
        }

        const post = await Post.create({
            title,
            body, 
            category,
        })

        await post.populate("category")

        return res.status(201).json({
            success: true,
            message: "Post created successfully",
            data: post,
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

// get posts
export const getAllPosts = async (req, res) => {
    try {
        const { category, page = 1, limit = 10 } = req.query

        let filter = {}

        // filter by category if provided
        if (category) {
            filter.category = category
        }

        const pageNumber = Math.max(Number(page) || 1, 1)
        const limitNumber = Math.max(Number(limit) || 10, 1)

        const skip = (pageNumber - 1) * limitNumber;

        const posts = await Post.find(filter)
        .populate("category")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limitNumber);

        const totalPosts = await Post.countDocuments(filter)

        return res.status(200).json({
            success: true,
            currentPage: pageNumber,
            totalPages: Math.ceil(totalPosts / limitNumber),
            totalPosts,
            count: posts.length,
            data: posts,
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

// get single post
export const getPostById = async (req, res) => {
    try {
        const { id } = req.params

        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid Post ID",
            })
        }

        const post = await Post.findById(id).populate("category")

        if(!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found",
            })
        }
        return res.status(200).json({
            success: true,
            data: post,
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

// update post
export const updatePost = async (req, res) => {
    try {
        const { id } = req.params
        const { title, body, category } = req.body

        // validate post id
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid Post Id",
            })
        }

        // check if post exists
        const existingPost = await Post.findById(id);

        if(!existingPost) {
            return res.status(404).json({
                success: false,
                message: "Post not found",
            })
        }

        // check if category exists
        const existingCategory = await Category.findById(category)

        if(!existingCategory) {
            return res.status(404).json({
                success: false,
                message: "Category not found",
            })
        }

        // update post
        const updatePost  = await Post.findByIdAndUpdate(
            id,
            {
                title,
                body,
                category,
            },
            {
                new: true,
                runValidators: true,
            }
        ).populate("category");

        return res.status(200).json({
            success: true,
            message: "Post updated successfully",
            data: updatePost,
        })
    } 
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

// delete post
export const deletePost = async (req, res) => {
    try {
        const { id } = req.params

        // validate id
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid Post ID",
            })
        }

        // check if post exists
        const existingPost = await Post.findById(id)

        if(!existingPost) {
            return res.status(404).json({
                success: false,
                message: "Post not found",
            })
        }

        await Post.findByIdAndDelete(id)

        return res.status(200).json({
            success: true,
            message: "Post deleted successfully",
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}