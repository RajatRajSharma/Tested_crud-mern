import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { readFileSync } from 'fs';
import userRoutes from './api/routes/userRoutes.js';
import connectDB from './config/db.js';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Read swagger.json file synchronously
const swaggerDocument = JSON.parse(readFileSync('./swagger.json', 'utf-8'));

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/users', userRoutes);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

export { app, server };