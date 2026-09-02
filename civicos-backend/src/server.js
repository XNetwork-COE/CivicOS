import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/api.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', apiRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'CivicOS Backend is running' });
});

app.listen(PORT, () => {
  console.log(`CivicOS Backend API listening at http://localhost:${PORT}`);
});
