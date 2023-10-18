// controllers/user.controller.ts

import { userService } from '../services/user.service'; // Import the userService
import { IUser } from '../models/user.model';
import { NextFunction, Request, Response } from 'express';

class UserController {
    constructor() {}

    async insertUser(req: Request, res: Response, next: NextFunction) {
        const user: Omit<IUser, 'id'> = req.body;
        try {
            await userService.createUser(user); // Use the userService
            res.status(201).json({ message: 'User created successfully.' });
        } catch (e) {
            next(e);
        }
    }
}

const userController = new UserController();

export { userController };