// services/user.service.ts

import { companyModel, ICompany } from '../models/company.model';

class CompanyService {
    constructor() {}

    async getAllCompanies(): Promise<ICompany[]> {
        return companyModel.getAllCompanies();
    }

    async createCompany(company: Omit<ICompany, 'id'>): Promise<null> {
        return companyModel.createCompany(company);
    }

    async deleteCompany(companyId: number): Promise<null> {
        // You may want to add additional logic or checks here before deleting a company.
        return companyModel.deleteCompany({ id: companyId });
    }
}

const companyService = new CompanyService();

export { companyService };