import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blog API",
      version: "1.0.0",
      description: "REST API for Blog Management",
    },
    servers: [
        {
            url: "http://localhost:5000",
            description: "Local Development Server",
        },
        {
            url: "https://blog-api-yu4n.onrender.com",
            description: "Production Server",
        },
    ],
  },

  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;