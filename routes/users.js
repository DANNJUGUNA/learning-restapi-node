import express from 'express';
import { createUser,showUsers,getUser,deleteUser,updateUser } from '../controllers/users.js';
const router=express.Router();


//all routes are starting with /users
router.get('/',showUsers );
router.post('/',createUser);
router.get('/:id',getUser);
router.delete('/:id',deleteUser );
router.patch('/:id',updateUser);
export default router;