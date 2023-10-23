// controllers/room.controller.ts

import { roomService } from '../services/room.service'; // Import the roomService
import { IRoom } from '../models/room.model';
import { NextFunction, Request, Response } from 'express';

class RoomController {
    constructor() {}

    async insertRoom(req: Request, res: Response, next: NextFunction) {
        const room: Omit<IRoom, 'id'> = req.body;
        try {
            await roomService.createRoom(room); // Use the roomService
            res.status(201).json({ message: 'Room created successfully.' });
        } catch (e) {
            next(e);
        }
    }
}

const roomController = new RoomController();

export { roomController };