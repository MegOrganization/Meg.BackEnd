import db from './db';

enum EDocumentType {
    "CPF" = "CPF",
    "CNPJ" = "CNPJ"
}

interface ICompany {
    id: number;
    name: string;
    document_number?: string;
    document_type?: EDocumentType;
    logo_path?: string;
    colors?: JSON;
    schema_name: string;
    active: boolean;
}

class CompanyModel {
    constructor() {}

    async getAllCompanies(): Promise<ICompany[]> {
        const companies = await db.any('SELECT * FROM companies');
        return companies as ICompany[];
    }

    async createCompany(company: Omit<ICompany, 'id'>): Promise<null> {
        await db.none('INSERT INTO companies (name, document_number, document_type, logo_path, colors, schema_name, active) VALUES ($1, $2, $3, $4, $5, $6, $7)', 
        [company.name, company.document_number, company.document_type, company.logo_path, company.colors, company.schema_name, company.active]);
        return null;
    }

    async deleteCompany(company: Pick<ICompany, 'id'>): Promise<null> {
        await db.none('DELETE FROM companies WHERE id = $1', company.id);
        return null;
    }
}

const companyModel = new CompanyModel();

export { companyModel, ICompany, EDocumentType };