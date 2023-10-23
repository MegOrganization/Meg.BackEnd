// controllers/payment_method.controller.ts

import { paymentMethodService } from '../services/payment_method.service'; // Import the paymentMethodService
import { IPaymentMethod } from '../models/payment_method.model';
import { NextFunction, Request, Response } from 'express';

class PaymentMethodController {
    constructor() {}

    async insertPaymentMethod(req: Request, res: Response, next: NextFunction) {
        const paymentMethod: Omit<IPaymentMethod, 'id'> = req.body;
        try {
            await paymentMethodService.createPaymentMethod(paymentMethod); // Use the userService
            res.status(201).json({ message: 'Payment Method created successfully.' });
        } catch (e) {
            next(e);
        }
    }
}

const paymentMethodController = new PaymentMethodController();

export { paymentMethodController };