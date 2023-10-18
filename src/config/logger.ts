// logger.js
import { createLogger, transports, format } from 'winston';


class Logger{
    constructor(){  

    }
    logger = createLogger({
        level: 'error',
        format: format.combine(
            format.timestamp(),
            format.printf(({ timestamp, level, message }) => {
                return `${timestamp} ${level}: ${message}`;
            })
        ),
        transports: [
            new transports.Console(), // Log to the console
            new transports.File({ filename: 'error.log' }) // Log to a file
        ],
    });  
}

const logger = new Logger();

export {logger};