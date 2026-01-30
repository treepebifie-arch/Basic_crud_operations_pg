import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './route/userRoutes.js'; 
const app = express();

//middlware
app.use(express.json());
app.use('/api/v1', userRoutes)

app.get('/', (req, res) => {
    res.send('Welcome to User Management API');
});



export default app;

