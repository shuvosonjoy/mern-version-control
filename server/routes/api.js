import express from 'express';
import { userProfile } from '../controller/user_controller.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});



router.get('/profile/:username', userProfile);


router.get('/login', (req, res) => {
    res.send('this is login page from api');
  });

export default router;