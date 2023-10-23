// services/payment_method.service.ts

import { paymentMethodModel, IPaymentMethod } from '../models/payment_method.model';

class PaymentMethodService {
    constructor() {}

    async getAllUPaymentMethods(): Promise<IPaymentMethod[]> {
        return paymentMethodModel.getAllPaymentMethods();
    }

    async createPaymentMethod(paymentMethod: Omit<IPaymentMethod, 'id'>): Promise<null> {
        return paymentMethodModel.createPaymentMethod(paymentMethod);
    }

    async deletePaymentMethod(paymentMethodId: number): Promise<null> {
        // You may want to add additional logic or checks here before deleting a payment_method.
        return paymentMethodModel.deletePaymentMethod({ id: paymentMethodId });
    }
}

const paymentMethodService = new PaymentMethodService();

export { paymentMethodService };