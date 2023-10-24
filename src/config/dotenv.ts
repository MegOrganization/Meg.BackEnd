import dotenv from "dotenv";
// import {ProcessEnv} from '@types/dotenv';


declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWTSecret: string,
      CookieSecret: string
    }
  }
}

const securedEnv:NodeJS.ProcessEnv = process.env;
dotenv.config();


export {securedEnv};