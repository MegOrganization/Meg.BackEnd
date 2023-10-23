import db from './db';

/*
CREATE TABLE IF NOT EXISTS payment_methods (
	id serial PRIMARY KEY,
	name VARCHAR (250) UNIQUE NOT NULL,
	percentage INTEGER DEFAULT 0 NOT NULL,
	active BOOLEAN NOT NULL,
	CONSTRAINT percentage_ck CHECK (percentage >= 0)
);
*/

interface IPaymentMethod {
    id: number;
    name: string;
    percentage: number;
    active: boolean;
}

class PaymentMethodModel {
    constructor() {}

    async getAllPaymentMethods(): Promise<IPaymentMethod[]> {
        const paymentMethods = await db.any('SELECT * FROM payment_methods');
        return paymentMethods as IPaymentMethod[];
    }

    async createPaymentMethod(paymentMethod: Omit<IPaymentMethod, 'id'>): Promise<null> {
        await db.none('INSERT INTO payment_methods (name, percentage, active) VALUES ($1, $2, $3)', 
        [paymentMethod.name, paymentMethod.percentage, paymentMethod.active]);
        return null;
    }

    async deletePaymentMethod(paymentMethod: Pick<IPaymentMethod, 'id'>): Promise<null> {
        await db.none('DELETE FROM users WHERE id = $1', paymentMethod.id);
        return null;
    }
}

const paymentMethodModel = new PaymentMethodModel();

export { paymentMethodModel, IPaymentMethod };