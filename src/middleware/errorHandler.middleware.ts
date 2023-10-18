// middleware/errorHandler.ts

import { Request, Response, NextFunction } from 'express';
import {logger} from '../config/logger';
import { randomUUID } from 'crypto';

enum HttpStatusCode {
    OK = 200,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    INTERNAL_SERVER = 500,
}


class ErrorHandler{
    constructor(){}

    customErrorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
        if (error instanceof Error) {
            // Log the error
            const uuid=randomUUID();
            logger.logger.error(`Error:${uuid} Request URL:${req.originalUrl}  Body:${JSON.stringify(req.body)} \n${error.name} \n${error.message} \n${error.stack}`);
            // console.error('Error:', error);
            console.error('Error:', 'An error occured, check LOG file.');
    
            
            // Send an appropriate response to the client
            res.status(HttpStatusCode.INTERNAL_SERVER).json({ error: `Internal Server Error. Contact Administrator. Protocol: ${uuid} `, 'Protocol': uuid });
        } else {
            next(error); // Pass the error to the next error handling middleware
        }
    }


}


const errorHandler = new ErrorHandler();

export {errorHandler, HttpStatusCode};