import db from './db';

enum EGender {
    "Male" = "Male",
    "Female" = "Female"
}

interface IUser {
    id: number;
    name: string;
    mail: string;
    phone?: string;
    gender: EGender;
    active: boolean;
}

class UserModel {
    constructor() {}

    async getAllUsers(): Promise<IUser[]> {
        const users = await db.any('SELECT * FROM users');
        return users as IUser[];
    }

    async createUser(user: Omit<IUser, 'id'>): Promise<null> {
        await db.none('INSERT INTO users (name, mail, phone, gender, active) VALUES ($1, $2, $3, $4, $5)', [user.name, user.mail, user.phone, user.gender, user.active]);
        return null;
    }

    async deleteUser(user: Pick<IUser, 'id'>): Promise<null> {
        await db.none('DELETE FROM users WHERE id = $1', user.id);
        return null;
    }
}

const userModel = new UserModel();

export { userModel, IUser, EGender };
