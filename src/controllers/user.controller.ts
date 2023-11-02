// controllers/user.controller.ts

import { userService } from '../services/user.service'; // Import the userService
import { IUser } from '../models/user.model';
import { NextFunction, Request, Response } from 'express';

class UserController {
    constructor() {}

    async insertUser(req: Request, res: Response, next: NextFunction) {
        const user: Omit<IUser, 'id'> = req.body;
        try {
            const retorno = await userService.createUser(user); // Use the userService
            
            if (retorno.message == 'OK') {
                res.status(201).json({ message: 'User created successfully.' });
            }
            else{
                res.status(500).json({ message: retorno.message });
            }

        } catch (e) {
            next(e);
        }
    }
}

const userController = new UserController();

export { userController };