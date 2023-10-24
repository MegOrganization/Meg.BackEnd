import db from './db';

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

    async createUser(user: Omit<IUser, 'id'>): Promise<null> {
        await db.none('INSERT INTO users (name, email, phone_number, password, type, active) VALUES ($1, $2, $3, $4, $5, $6)', 
        [user.name, user.email, user.phone_number, user.password, user.type, user.active]);
        return null;
    }

    async deleteUser(user: Pick<IUser, 'id'>): Promise<null> {
        await db.none('DELETE FROM users WHERE id = $1', user.id);
        return null;
    }
}

const userModel = new UserModel();

export { userModel, IUser, EType };
