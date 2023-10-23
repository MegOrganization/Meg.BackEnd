// services/user.service.ts

import { instructorModel, IInstructor } from '../models/instructor.model';

class InstructorService {
    constructor() {}

    async getAllInstructors(): Promise<IInstructor[]> {
        return instructorModel.getAllInstructors();
    }

    async createInstructor(instructor: Omit<IInstructor, 'id'>): Promise<null> {
        return instructorModel.createInstructor(instructor);
    }

    async deleteInstructor(instructorId: number): Promise<null> {
        // You may want to add additional logic or checks here before deleting a instructor.
        return instructorModel.deleteInstructor({ id: instructorId });
    }
}

const instructorService = new InstructorService();

export { instructorService };