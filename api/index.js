import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import authRouter from './router/authRouter.js';
import noteRouter from './router/noteRouter.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: '*' }));

// Connect to MongoDB
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1); 
    }
};

// Routes
app.use('/', authRouter);
app.use('/', noteRouter);

// Error Handling Middleware
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        success: false,
        status: err.statusCode || 500,
        message: err.message || 'Internal Server Error',
    });
});


app.listen(process.env.PORT, async () => {
    console.log(`Server is working on port: ${process.env.PORT}`);
    await connectDb();
});