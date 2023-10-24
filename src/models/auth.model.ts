import db from './db';
import { IUser } from './user.model';
import { userService } from '../services/user.service';

interface IAuth{
    mail: string,
    password: string
}


class AuthModel {
    constructor(){}

    async signIn(){

    }

    async signUp(user: Omit<IUser,"id">){
        userService.createUser(user)
        .then(()=>{
            
        })
        .catch(()=>{

        });

    }

    async signOut(){

    }

}