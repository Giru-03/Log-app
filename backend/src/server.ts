import dotenv from 'dotenv';
dotenv.config(); 

import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db';
import authRoutes from './routes/auth';
import { errorHandler } from './middleware/errorHandlers';

process.on('unhandledRejection', (err: any) => {
  console.error('UNHANDLED REJECTION!', err);
  process.exit(1);
});

process.on('uncaughtException', (err: any) => {
  console.error('UNCAUGHT EXCEPTION!', err);
  process.exit(1);
});

const app = express();
app.use(cors({
  origin: ["https://log-app-nine.vercel.app", "http://localhost:5173"], // Adjust as needed
  credentials: true, // If you're using Authorization headers
}));
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'OK', time: new Date().toISOString() });
});

app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Recipe Generator API is running successfully! 👍");
});

export default app;