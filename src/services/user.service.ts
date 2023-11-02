// services/user.service.ts

import { userModel, IUser } from '../models/user.model';
interface DTOServiceReturn{
    message:string
}

class UserService {
    constructor() {}

    async getAllUsers(): Promise<IUser[]> {
        return userModel.getAllUsers();
    }

    async createUser(user: Omit<IUser, 'id'>): Promise<DTOServiceReturn> {
        
        if (user.name.length > 250){
            return {message: 'O Campo Nome tem mais de 250 caracteres'}
        }

        return userModel.createUser(user);
    }

    async deleteUser(userId: number): Promise<DTOServiceReturn> {
        return userModel.deleteUser({ id: userId });
    }
}

const userService = new UserService();

export { userService, DTOServiceReturn };