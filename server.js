import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import postRoutes from "./routes/postRoutes.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import swaggerUi from "swagger-ui-express"
import swaggerSpec from "./config/swagger.js"

dotenv.config()

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use("/posts", postRoutes)
app.use("/categories", categoryRoutes)
app.use("/api-docs", 
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
)

app.get("/", (req, res) => {
    res.send("Blog API Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})