import Category from "../models/Category.js"
import category from "../models/Category.js"

// create category
export const createCategory = async (req, res) => {
    try {
        const { name } = req.body

        // validation
        if(!name) {
            return res.status(400).json({
                success: false,
                message: "Category name is required",
            })
        }

        // check if category already exists
        const existingCategory = await Category.findOne({ name })

        if(existingCategory) {
            return res.status(400).json({
                success: false,
                message: "Category already exists",
            })
        }

        // create category
        const category = await Category.create({ name })

        return res.status(200).json({
            success: true, 
            message: "Category created successfully",
            data: category,
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

// get all category
export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();

        return res.status(200).json({
            success: true,
            count: categories.length,
            data: categories,
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

// get category by id
export const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params

        const category = await Category.findById(id)

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Category not found",
            })
        }

        return res.status(200).json({
            success: true,
            data: category,
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}