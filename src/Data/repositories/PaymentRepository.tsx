// Data/repositories/PaymentRepositoryImpl.ts
import { PaymentRepository } from '../../Domain/repositories/PaymentRepository';
import { PaymentData } from '../../Domain/entities/Payment';
import stripe from 'react-native-stripe-client';
import { STRIPE_PUBLISHABLE_KEY } from '@env';

const stripeClient = stripe(STRIPE_PUBLISHABLE_KEY);

export class PaymentRepositoryImpl implements PaymentRepository {
  async createPayment(paymentData: PaymentData): Promise<any> {
    console.log("PaymentRepositoryImpl: Creating payment method with data", paymentData);
    const { cardNumber, expiryDate, cvc } = paymentData;
    const expMonth = parseInt(expiryDate.split('/')[0]);
    const expYear = parseInt(expiryDate.split('/')[1]) + 2000; 

    const response = await stripeClient.createPaymentMethod('card', {
      number: cardNumber.replace(/\s/g, ''),
      exp_month: expMonth,
      exp_year: expYear,
      cvc,
    });

    console.log("PaymentRepositoryImpl: Payment method created successfully", response);
    return response;
  }
}
