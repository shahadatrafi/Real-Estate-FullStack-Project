import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config()

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.listen(port, ()=> {
    console.log(`Server is running on ${port}`);
});