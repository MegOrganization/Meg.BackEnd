import db from './db';
import { IUser } from './user.model';
import { userService } from '../services/user.service';


interface IAuth{
    mail: string,
    password: string
}


class LoginModel {
    constructor(){}

    async userExists(){
        
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

export {LoginModel, IAuth}