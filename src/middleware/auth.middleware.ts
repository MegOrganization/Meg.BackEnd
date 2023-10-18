import jwt from 'jsonwebtoken';
import { securedEnv } from '../config/dotenv';
import { IUser, EGender } from '../models/user.model';

const secret = securedEnv.jwtSecret || "SECRET";


class AuthMiddleware{
    constructor(){}
    signJWT(){
        const u:IUser = {id:17, name:"Victor Lucas Mazzotti", mail:"mazzotti.vlm@gmail.com", active: true, gender: EGender.Male}
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