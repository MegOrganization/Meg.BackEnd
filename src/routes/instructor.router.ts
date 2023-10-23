import { Router } from "express";
import { instructorController } from '../controllers/instructor.controller';

const instructorRouter = Router();

instructorRouter.post('/', instructorController.insertInstructor);

export {instructorRouter};