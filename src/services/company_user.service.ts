// services/user.service.ts

import { companyUserModel, ICompanyUser } from '../models/company_user.model';

class CompanyUserService {
    constructor() {}

    async getAllCompanyUsers(): Promise<ICompanyUser[]> {
        return companyUserModel.getAllCompanyUsers();
    }

    async createCompanyUser(company_user: Omit<ICompanyUser, 'id'>): Promise<null> {
        return companyUserModel.createCompanyUser(company_user);
    }

    async deleteCompanyUser(companyUserId: number): Promise<null> {
        // You may want to add additional logic or checks here before deleting a user.
        return companyUserModel.deleteCompanyUser({ id: companyUserId });
    }
}

const companyUserService = new CompanyUserService();

export { companyUserService };