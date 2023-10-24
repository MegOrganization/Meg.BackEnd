import jwt from 'jsonwebtoken';
import { securedEnv } from '../config/dotenv';
import { IUser, EType } from '../models/user.model';

const secret = securedEnv.JWTSecret;


class AuthMiddleware{
    constructor(){}
    signJWT(){
        const u:IUser = {id:17, name:"Leandro Lourenço Miranda", email:"leandromiranda87@gmail.com", phone_number: "19981404269", password: "pass", 
                         type: EType.Administrador, active: true}
        const token = jwt.sign(u, secret, {expiresIn: '5m'});
        console.log(token);
        return token;
    }

    verifyJWT(signed: string){
        jwt.verify(signed, secret, (err, user) => {
            if(err){
                console.log("JWT can't be trusted. Sign failed");
            }
            else{
                console.log(user);
            }
        })
    }

}


const authMiddleware = new AuthMiddleware();

export {authMiddleware};