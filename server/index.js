import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.js';
import connectToDatabase from './db/db.js';
import departmentRouter from './routes/department.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/department', departmentRouter);

const startServer = async () => {
    try {
        await connectToDatabase();

        const port = process.env.PORT || 3001;
        app.listen(port, () => {
            console.log(`Server is Running on port ${port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error.message);
        process.exit(1);
    }
};

startServer();