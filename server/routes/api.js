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
    console.log("here", req.user);
    res.redirect(process.env.CLIENT_BASE_URL);
    console.log(req.user); 
    console.log(req.isAuthenticated());
  });

router.get('/auth/check',(req,res)=>{
  console.log(req.isAuthenticated);
  if(req.isAuthenticated()){
    console.log("here", req.user);
    res.send({user: req.user});
    console.log(req.user);
  }
  else{
    res.send({user:null});
  }

})
  router.get('/logout', function(req, res){
    req.destroy(
     (err)=>{
      res.json({message: "logged out"});
     }
    );
  });


router.get('/login', (req, res) => {
    res.send('this is login page from api');
  });




export default router;