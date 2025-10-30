import dotenv from 'dotenv';
dotenv.config(); // ← MUST BE FIRST

import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db';
import authRoutes from './routes/auth';
import { errorHandler } from './middleware/errorHandlers';

// Global error logging
process.on('unhandledRejection', (err: any) => {
  console.error('UNHANDLED REJECTION!', err);
  process.exit(1);
});

process.on('uncaughtException', (err: any) => {
  console.error('UNCAUGHT EXCEPTION!', err);
  process.exit(1);
});

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'OK', time: new Date().toISOString() });
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});