import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/login', (req, res) => {
    res.send('this is login page from api');
  });

export default router;