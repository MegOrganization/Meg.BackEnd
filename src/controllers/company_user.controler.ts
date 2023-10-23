// controllers/user.controller.ts

import { companyUserService } from '../services/company_user.service'; // Import the userService
import { ICompanyUser } from '../models/company_user.model';
import { NextFunction, Request, Response } from 'express';

class CompanyUserController {
    constructor() {}

    async insertCompanyUser(req: Request, res: Response, next: NextFunction) {
        const company_user: Omit<ICompanyUser, 'id'> = req.body;
        try {
            await companyUserService.createCompanyUser(company_user); // Use the userService
            res.status(201).json({ message: 'User created successfully.' });
        } catch (e) {
            next(e);
        }
    }
}

const companyUserController = new CompanyUserController();

export { companyUserController };