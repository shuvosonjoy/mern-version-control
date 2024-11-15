import express from 'express';
import dotenv from 'dotenv';
import { userProfile } from '../controller/user_controller.js';
import { dot } from 'node:test/reporters';
import passport from 'passport';

dotenv.config();

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});



router.get('/profile/:username', userProfile);
router.get('/auth/github',  passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: process.env.CLIENT_BASE_URL +'/login' }),
  function(req, res) {
    res.redirect(process.env.CLIENT_BASE_URL);
  });


router.get('/login', (req, res) => {
    res.send('this is login page from api');
  });

export default router;