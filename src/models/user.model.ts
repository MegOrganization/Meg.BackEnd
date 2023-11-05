import db from './db';
import { DTOServiceReturn } from '../services/user.service';

enum EType {
    "Administrador" = "Administrador",
    "Professor" = "Professor",
    "Aluno" = "Aluno"
}

interface IUser {
    id: number;
    name: string;
    email: string;
    phone_number?: string;
    password: string;
    type: EType;
    active: boolean;
}

class UserModel {
    constructor() {}

    async getAllUsers(): Promise<IUser[]> {
        const users = await db.any('SELECT * FROM users');
        return users as IUser[];
    }

    async userExistsByMail(user: Pick<IUser, 'email'>): Promise<boolean> {
        const userResult: IUser | null = await db.oneOrNone('SELECT * FROM users WHERE email = $1', user.email);
        return userResult !== null;
    }

    async getUserById(user: Pick<IUser,'id'>): Promise<IUser | null>{
        return db.oneOrNone('SELECT * FROM users WHERE id = $1', user.id);
    }

    async getUserByMail(user: Pick<IUser, 'email'>): Promise<IUser | null> {
        return db.oneOrNone('SELECT * FROM users WHERE email = $1', user.email);
    }

    async createUser(user: Omit<IUser, 'id'>): Promise<DTOServiceReturn> {
        await db.none('INSERT INTO users (name, email, phone_number, password, type, active) VALUES ($1, $2, $3, $4, $5, $6)', 
        [user.name, user.email, user.phone_number, user.password, user.type, user.active]);
        return {message: 'OK'};
    }

    async deleteUser(user: Pick<IUser, 'id'>): Promise<DTOServiceReturn> {
        await db.none('DELETE FROM users WHERE id = $1', user.id);
        return {message: 'OK'};
    }
}

const userModel = new UserModel();

export { userModel, IUser, EType };
