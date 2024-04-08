import express from 'express';
import { getAllUsers, createUser, getUserById, updateUser, deleteUser } from '../controllers/userController.js';

const userRoutes = express.Router();

userRoutes.get('/', getAllUsers);
userRoutes.post('/', createUser);
userRoutes.get('/:id', getUserById);
userRoutes.put('/:id', updateUser);
userRoutes.delete('/:id', deleteUser);

export default userRoutes;
