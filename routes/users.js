import express from 'express';

const router=express.Router();
const users=[
    {
        "firstName":"John",
        "lastName":"Doe",
        "age":25
    }
]
//all routes are starting with /users
router.get('/', (req, res) => {
     res.send('HELLO')
});

export default router;