import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/api.js';

const app = express();
app.use(cors());

app.use('/',router);

app.listen(4000, () => {
    console.log('Server started');
}); 


