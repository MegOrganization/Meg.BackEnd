import { Request, Response, NextFunction } from 'express';

class TemplateMiddleware{
    constructor(){}
    test(request: Request, response: Response, next: NextFunction) {
        console.log("hello from test middleware");
        response.cookie("teste","teste novo",{httpOnly:true, secure: true, sameSite: true, signed: true})
        // response.status(200).json({ message: 'OK'});
        next();

    } 
}


const templateMiddleware = new TemplateMiddleware();

export {templateMiddleware}