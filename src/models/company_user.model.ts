import db from './db';

interface ICompanyUser {
    id: number;
    company_id: number;
    user_id: number;
}

class CompanyUserModel {
    constructor() {}

    async getAllCompanyUsers(): Promise<ICompanyUser[]> {
        const company_users = await db.any('SELECT * FROM company_user');
        return company_users as ICompanyUser[];
    }

    async createCompanyUser(companyUser: Omit<ICompanyUser, 'id'>): Promise<null> {
        await db.none('INSERT INTO company_user (company_id, user_id) VALUES ($1, $2)', 
        [companyUser.company_id, companyUser.user_id]);
        return null;
    }

    async deleteCompanyUser(companyUser: Pick<ICompanyUser, 'id'>): Promise<null> {
        await db.none('DELETE FROM company_user WHERE id = $1', companyUser.id);
        return null;
    }
}

const companyUserModel = new CompanyUserModel();

export { companyUserModel, ICompanyUser };