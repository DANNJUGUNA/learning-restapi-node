import express from 'express';

const router=express.Router();

router.get('/users', (req, res) => {
     res.send('HELLO')
});

export default router;