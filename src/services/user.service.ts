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

    async userExistsByMail(user: Pick<IUser, 'email'>): Promise<boolean> {
        const userObject: Pick<IUser, 'email'> = { email: user.email };
        const userResult = await userModel.getUserByMail(userObject);
        return userResult !== null;
    }

    async getUserById(user: Pick<IUser,'id'>): Promise<IUser | null>{
        const userObject: Pick<IUser, 'id'> = { id: user.id };
        return userModel.getUserById(userObject);
    }

    async getUserByMail(user: Pick<IUser, 'email'>): Promise<IUser | null> {
        const userObject: Pick<IUser, 'email'> = { email: user.email };
        return userModel.getUserByMail(userObject);
    }



}

const userService = new UserService();

export { userService, DTOServiceReturn };