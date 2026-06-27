import mongoose from "mongoose"

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        body: {
            type: String,
            required: true,
            trim: true,
        },

        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        }
    },
    {
        timestamps: true
    }
)

const Post = mongoose.model("Post", postSchema)

export default Post