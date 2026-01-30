
import { userService } from "../services/services.js";

export const createUser = async (req, res) => {
    try {
        const userData = req.body;
        if (!userData.fullname || !userData.email || !userData.dob) {
            return res.status(400).json({ error: 'all fields are required' });
        };
        const newUser = await userService.create(userData);
        res.status(201).json({message: "User created successfully", newUser});
        
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAll();
        res.status(200).json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const updateUser = async (req, res) => {
    try {
       const { id } = req.params;
       const updateData = req.body;
       const updatedUser = await userService.update(id, updateData, { new: true });
       if (!updatedUser) {
           return res.status(404).json({ error: 'User not found' });
       };
       return res.status(200).json({ message: 'User updated successfully', updatedUser });

    } catch (err) {
        console.error('Error updating user:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await userService.delete(id);
        if (!deleteUser) {
            return res.status(404).json({ error: 'User not found' });
        };
        return  res.status(200).json({ message: 'User deleted successfully', deleteUser });
    } catch (err) {
        console.error('Error deleting user:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}
