// controllers/class_modality.controller.ts

import { classModalityService } from '../services/class_modality.service'; // Import the classModalityService
import { IClassModality } from '../models/class_modality.model';
import { NextFunction, Request, Response } from 'express';

class ClassModalityController {
    constructor() {}

    async insertClassModality(req: Request, res: Response, next: NextFunction) {
        const classModality: Omit<IClassModality, 'id'> = req.body;
        try {
            await classModalityService.createClassModality(classModality); // Use the classModalityService
            res.status(201).json({ message: 'Class Modality created successfully.' });
        } catch (e) {
            next(e);
        }
    }
}

const classModalityController = new ClassModalityController();

export { classModalityController };