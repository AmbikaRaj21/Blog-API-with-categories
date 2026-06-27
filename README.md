# 📝 Blog API

A RESTful Blog API built using **Node.js**, **Express.js**, and **MongoDB** following the MVC architecture.

The API allows users to manage blog posts and categories with CRUD operations, filtering, pagination, and interactive API documentation using Swagger.

---

## 🚀 Live Demo

API Base URL:

https://blog-api-yu4n.onrender.com

Swagger Documentation:

https://blog-api-yu4n.onrender.com/api-docs

---

## 🚀 Features

- Create, Read, Update and Delete (CRUD) Posts
- Create and Retrieve Categories
- Filter Posts by Category
- Pagination Support
- MongoDB Database with Mongoose
- MVC Project Structure
- Swagger API Documentation
- Error Handling
- Deployed on Render

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Swagger UI
- Render

---

## 📂 Project Structure

```
blog-api/
│
├── config/
├── controllers/
├── models/
├── routes/
├── .env
├── server.js
└── package.json
```

---

## 📌 API Endpoints

### Posts

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /posts | Create a new post |
| GET | /posts | Get all posts |
| GET | /posts/:id | Get single post |
| PUT | /posts/:id | Update post |
| DELETE | /posts/:id | Delete post |

### Categories

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /categories | Create category |
| GET | /categories | Get all categories |

---

## 📖 Query Parameters

### Filter Posts

GET /posts?category={categoryId}

Returns posts belonging to a specific category.

### Pagination

GET /posts?page=1&limit=10

Example:

GET /posts?page=2&limit=5

---

## ⚙️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000
```

Run the server

```bash
npm run dev
```

---

## 📖 Swagger Documentation

After running the project locally:

http://localhost:5000/api-docs

For deployed project:

https://blog-api-yu4n.onrender.com/api-docs

---

## 👩‍💻 Author

**Ambika Raj**

GitHub: https://github.com/ambikaraj21
