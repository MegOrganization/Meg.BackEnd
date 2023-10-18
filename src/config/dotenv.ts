import dotenv from "dotenv";
// import {ProcessEnv} from '@types/dotenv';

interface idotEnv extends NodeJS.ProcessEnv{
  jwtSecret?: string
}

const securedEnv:idotEnv = process.env;
dotenv.config();


export {securedEnv};