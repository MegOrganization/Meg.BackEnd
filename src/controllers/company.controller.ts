// controllers/user.controller.ts

import { companyService } from '../services/company.service'; // Import the companyService
import { ICompany } from '../models/company.model';
import { NextFunction, Request, Response } from 'express';

class CompanyController {
    constructor() {}

    async insertCompany(req: Request, res: Response, next: NextFunction) {
        const company: Omit<ICompany, 'id'> = req.body;
        try {
            await companyService.createCompany(company); // Use the companyService
            res.status(201).json({ message: 'Company created successfully.' });
        } catch (e) {
            next(e);
        }
    }
}

const companyController = new CompanyController();

export { companyController };