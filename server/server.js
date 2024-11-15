import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/api.js';
import passport from 'passport';
import connectDB from './database/db.js';
import  "./passport/github.auth.js";

import session from 'express-session';

const app = express();
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());




 
app.use('/',router);

app.listen(4000, () => {
    console.log('Server started');
    connectDB();
}); 

 
