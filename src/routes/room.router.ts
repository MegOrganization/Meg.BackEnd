import { Router } from "express";
import { roomController } from '../controllers/room.controller';

const roomRouter = Router();

roomRouter.post('/', roomController.insertRoom);

export {roomRouter};