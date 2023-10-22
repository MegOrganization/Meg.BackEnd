import db from './src/models/db'; // Adjust the path to your db.js file
import express, { response } from 'express';
import { escape } from 'querystring';
import { userRouter } from './src/routes/user.router';
import {Request, Response} from 'express';
import cookieParser from 'cookie-parser';
import { securedEnv } from './src/config/dotenv';
import {errorHandler, HttpStatusCode} from './src/middleware/errorHandler.middleware';
import { authMiddleware } from './src/middleware/auth.middleware';
import { companyRouter } from './src/routes/company.router';

// const secret:idotEnv = process.env;
// console.log(process.env);
console.log(securedEnv.jwtSecret);
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/api/users', userRouter);
app.use('/api/companies', companyRouter);
app.use(errorHandler.customErrorHandler);


app.get('/', (req:Request, res:Response) => {
    res.cookie("teste","valor do teste",{httpOnly: true})
    res.send({message: 'Success'})
  })

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// const token = authMiddleware.signJWT();
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsIm5hbWUiOiJWaWN0b3IgTHVjY2EgTWF6em90dGkiLCJtYWlsIjoibWF6em90dGkudmxtQGdtYWlsLmNvbSIsImFjdGl2ZSI6dHJ1ZSwiZ2VuZGVyIjoiTWFsZSIsImlhdCI6MTY5NzYyNjk5NiwiZXhwIjoxNjk3NjI3Mjk2fQ.LyweLsMoNJ-0su2VUmibEMtM4PGH_78eQ6L2exLpK8U'
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsIm5hbWUiOiJWaWN0b3IgTHVjYXMgTWF6em90dGkiLCJtYWlsIjoibWF6em90dGkua2xtQGdtYWlsLmNvbSIsImlhdCI6MTY5NzU2NTc5NCwiZXhwIjoxNjk3NjU2MjkwfQ.tn95SoD1_MiTKaoWJuuPKUnt04pgvvS-VOn5z9-8YTk';
console.log(authMiddleware.verifyJWT(token));