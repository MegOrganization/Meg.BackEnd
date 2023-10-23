import { Router } from "express";
import { paymentMethodController } from '../controllers/payment_method.controller';

const paymentMethodRouter = Router();

paymentMethodRouter.post('/', paymentMethodController.insertPaymentMethod);

export {paymentMethodRouter};