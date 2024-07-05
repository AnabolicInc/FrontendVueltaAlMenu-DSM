// Domain/repositories/PaymentRepository.ts
import { PaymentData } from '../entities/Payment';

export interface PaymentRepository {
  createPayment(paymentData: PaymentData): Promise<any>;
}
