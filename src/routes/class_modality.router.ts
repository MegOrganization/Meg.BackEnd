import { Router } from "express";
import { classModalityController } from '../controllers/class_modality.controller';

const classModalityRouter = Router();

classModalityRouter.post('/', classModalityController.insertClassModality);

export {classModalityRouter};