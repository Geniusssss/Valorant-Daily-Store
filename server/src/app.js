import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import storeRoutes from './routes/storeRoutes.js';

const app = express();

const corsOptions = {
    origin: 'http://localhost:8081',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/store', storeRoutes);

export default app;