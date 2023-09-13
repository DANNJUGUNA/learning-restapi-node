import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router=express.Router();
const users=[
    {
        "firstName":"John",
        "lastName":"Doe",
        "age":25,
        "id":"1"
    }
]
//all routes are starting with /users
router.get('/', (req, res) => {
    console.log(users)
     res.send(users)
});
router.post('/', (req, res) => {
    const user=req.body
    users.push({...user,id:uuidv4()})
    res.send(users)
})
router.get('/:id',(req, res) => {
    const {id}=req.params;
   const foundUser= users.find((user)=>user.id===id)
    res.send(foundUser)
})

export default router;