// controllers/instructor.controller.ts

import { instructorService } from '../services/instructor.service'; // Import the instructorService
import { IInstructor } from '../models/instructor.model';
import { NextFunction, Request, Response } from 'express';

class InstructorController {
    constructor() {}

    async insertInstructor(req: Request, res: Response, next: NextFunction) {
        const instructor: Omit<IInstructor, 'id'> = req.body;
        try {
            await instructorService.createInstructor(instructor); // Use the userService
            res.status(201).json({ message: 'Instructor created successfully.' });
        } catch (e) {
            next(e);
        }
    }
}

const instructorController = new InstructorController();

export { instructorController };