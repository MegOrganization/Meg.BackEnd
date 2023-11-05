import { userService } from "./user.service";
import { IUser } from "../models/user.model";



class loginService {
    constructor(){}
    async login(user: Pick<IUser,'email' | 'password'>){
        const userObject: Pick<IUser,'email' | 'password'> = {email:user.email, password: user.password};
        const userReturn = await userService.getUserByMail(userObject);
        if(userReturn != null){
            
        }

        
    }

}