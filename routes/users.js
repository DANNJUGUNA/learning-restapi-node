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
    console.log(users)
     res.send(users)
});
router.post('/', (req, res) => {
    const user=req.body
    users.push(user)
    res.send(users)
})

export default router;