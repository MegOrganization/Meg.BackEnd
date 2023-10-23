import { Router } from "express";
import { companyUserController } from '../controllers/company_user.controller';

const companyUserRouter = Router();

companyUserRouter.post('/', companyUserController.insertCompanyUser);

export {companyUserRouter};