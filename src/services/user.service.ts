// services/user.service.ts

import { userModel, IUser } from '../models/user.model';

class UserService {
    constructor() {}

    async getAllUsers(): Promise<IUser[]> {
        return userModel.getAllUsers();
    }

    async createUser(user: Omit<IUser, 'id'>): Promise<null> {
        return userModel.createUser(user);
    }

    async deleteUser(userId: number): Promise<null> {
        return userModel.deleteUser({ id: userId });
    }
}

const userService = new UserService();

export { userService };