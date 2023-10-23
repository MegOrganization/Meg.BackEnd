// services/user.service.ts

import { classModalityModel, IClassModality } from '../models/class_modality.model';

class ClassModalityService {
    constructor() {}

    async getAllClassModalities(): Promise<IClassModality[]> {
        return classModalityModel.getAllClassModalities();
    }

    async createClassModality(classModality: Omit<IClassModality, 'id'>): Promise<null> {
        return classModalityModel.createClassModality(classModality);
    }

    async deleteClassModality(classModalityId: number): Promise<null> {
        // You may want to add additional logic or checks here before deleting a Class Modality.
        return classModalityModel.deleteClassModality({ id: classModalityId });
    }
}

const classModalityService = new ClassModalityService();

export { classModalityService };