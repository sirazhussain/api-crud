import { v4 as uuid } from 'uuid';

let users = [];

// Get all users
export const getUsers = (req, res) => {
    console.log(`Users in the database: ${JSON.stringify(users)}`);
    res.status(200).send(users);
};

// Create a new user
export const createUser = (req, res) => {   
    const user = req.body;
    
    const newUser = { ...user, id: uuid() };
    users.push(newUser);
    
    console.log(`User [${user.username}] added to the database.`);
    res.status(201).send(newUser); // Send the created user
};

// Get a single user by ID
export const getUser = (req, res) => {
    const user = users.find((user) => user.id === req.params.id);
    
    if (user) {
        res.status(200).send(user);
    } else {
        res.status(404).send({ message: 'User not found' });
    }
};

// Delete a user by ID
export const deleteUser = (req, res) => { 
    const initialLength = users.length;
    users = users.filter((user) => user.id !== req.params.id);
    
    if (users.length < initialLength) {
        console.log(`User with id ${req.params.id} has been deleted`);
        res.status(204).send(); // No content to send back
    } else {
        res.status(404).send({ message: 'User not found' });
    }
};

// Update a user by ID
export const updateUser = (req, res) => {
    const userIndex = users.findIndex((user) => user.id === req.params.id);
    
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...req.body };
        console.log(`User updated: ${JSON.stringify(users[userIndex])}`);
        res.status(200).send(users[userIndex]);
    } else {
        res.status(404).send({ message: 'User not found' });
    }
};
