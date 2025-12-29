// import dependencies
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import { authenticateToken } from './middleware/authMiddleware.js'; // corrected the file name

// load environment variables
dotenv.config();

//connect to database
connectDB();

//initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/api/protected', authenticateToken, (req,res) => {
    res.json({
        message: "protected route accessed", user: req.user
    });
});

//default route
app.get('/', (req,res) => {
    res.json({
        message: "hospital Management server is runninng:...",
        database: 'connected'
    });
});


//start the server
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT} `);
});

