import db from './db';

enum EGender {
    "Masculino" = "Masculino",
    "Feminino" = "Feminino"
}

enum ERegionalCouncil {
    "Crefito" = "Crefito",
    "Cofito" = "Cofito",
    "Cref" = "Cref"
}

interface IInstructor {
    id: number;
    name: string;
    birth_date?: Date;
    gender?: EGender;
    email?: string;
    phone_number?: string;
    cpf?: string;
    regional_council_code?: ERegionalCouncil;
    regional_council_number?: string;
    trial_class_paid: boolean;
    capacity: number;
    active: boolean;
}

class InstructorModel {
    constructor() {}

    async getAllInstructors(): Promise<IInstructor[]> {
        const instructors = await db.any('SELECT * FROM instructors');
        return instructors as IInstructor[];
    }

    async createInstructor(instructor: Omit<IInstructor, 'id'>): Promise<null> {
        await db.none('INSERT INTO instructors (name, birth_date, gender, email, phone_number, cpf, regional_council_code, regional_council_number, trial_class_paid, capacity, active) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', 
        [instructor.name, instructor.birth_date, instructor.gender, instructor.email, instructor.phone_number, instructor.cpf, instructor.regional_council_code, 
            instructor.regional_council_number, instructor.trial_class_paid, instructor.capacity, instructor.active]);
        return null;
    }

    async deleteInstructor(instructor: Pick<IInstructor, 'id'>): Promise<null> {
        await db.none('DELETE FROM instructors WHERE id = $1', instructor.id);
        return null;
    }
}

const instructorModel = new InstructorModel();

export { instructorModel, IInstructor, EGender, ERegionalCouncil };
