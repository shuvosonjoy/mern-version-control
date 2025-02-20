import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/api.js';
import passport from 'passport';
import connectDB from './database/db.js';
import  "./passport/github.auth.js";
import path from 'path';


import session from 'express-session';

const app = express();
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
app.use(
    cors({
      origin: "http://localhost:3000", // Allow only your frontend
      credentials: true, // Allow credentials (cookies, authorization headers)
    })
  );



  const __dirname = path.resolve();


  app.use(express.static(path.join(__dirname, "/client/dist"))); 
  app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "client","dist", "index.html"));
    });
  
 
app.use('/',router);

app.listen(4000, () => {
    console.log('Server started at port 4000');
    connectDB();
}); 

 
