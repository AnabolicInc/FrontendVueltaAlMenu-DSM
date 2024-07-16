// Domain/useCases/Payment/PaymentUseCase.ts
import { PaymentRepositoryImpl } from '../../../Data/repositories/PaymentRepository';
import { PaymentData } from '../../entities/Payment';

const paymentRepository = new PaymentRepositoryImpl();

export const createPaymentUseCase = async (paymentData: PaymentData) => {
  console.log("PaymentUseCase: Creating payment with data", paymentData);
  const response = await paymentRepository.createPayment(paymentData);
  console.log("PaymentUseCase: Payment created successfully", response);
  return response;
};