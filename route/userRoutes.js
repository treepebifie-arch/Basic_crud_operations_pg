import express from 'express';
import { createUser, getAllUsers, updateUser, deleteUser } from '../controller/userController.js';

const router = express.Router();


router.post ('/create', createUser);
router.get ('/getAll', getAllUsers);
router.put ('/updateUser/:id', updateUser);
router.delete ('/deleteUser/:id', deleteUser);


export default router;