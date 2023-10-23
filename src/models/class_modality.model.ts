import db from './db';

enum EClassModality {
    "Presencial" = "Presencial",
    "EAD" = "EAD"
}

interface IClassModality {
    id: number;
    name: string;
    capacity: number;
    trial_class_price: number;
    single_class_price: number;
    class_modality: EClassModality;
    class_duration: number;
    active: boolean;
}

class ClassModalityModel {
    constructor() {}

    async getAllClassModalities(): Promise<IClassModality[]> {
        const classModalities = await db.any('SELECT * FROM class_modalities');
        return classModalities as IClassModality[];
    }

    async createClassModality(classModality: Omit<IClassModality, 'id'>): Promise<null> {
        await db.none('INSERT INTO class_modalities (name, capacity, trial_class_price, single_class_price, class_modality, class_duration, active) VALUES ($1, $2, $3, $4, $5, $6, $7)', 
        [classModality.name, classModality.capacity, classModality.trial_class_price, classModality.single_class_price, classModality.class_modality, 
         classModality.class_duration, classModality.active]);
        return null;
    }

    async deleteClassModality(classModality: Pick<IClassModality, 'id'>): Promise<null> {
        await db.none('DELETE FROM class_modalities WHERE id = $1', classModality.id);
        return null;
    }
}

const classModalityModel = new ClassModalityModel();

export { classModalityModel, IClassModality, EClassModality };
