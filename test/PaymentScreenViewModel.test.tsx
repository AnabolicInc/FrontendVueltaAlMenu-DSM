import PaymentViewModel from '../src/Presentation/screens/client/payment/ViewModel';
import { showMessage } from 'react-native-flash-message';
import { createPaymentUseCase } from '../src/Domain/useCases/Payment/PaymentUseCase';

// Mockear showMessage
jest.mock('react-native-flash-message', () => ({
  showMessage: jest.fn(),
}));

// Mockear createPaymentUseCase
jest.mock('../../../../Domain/useCases/Payment/PaymentUseCase', () => ({
  createPaymentUseCase: jest.fn(),
}));

describe('PaymentViewModel', () => {
  let viewModel: ReturnType<typeof PaymentViewModel>;

  beforeEach(() => {
    viewModel = PaymentViewModel();
  });

  it('debería mostrar un mensaje de éxito si el pago es exitoso', async () => {
    (createPaymentUseCase as jest.Mock).mockResolvedValue({ success: true });

    await viewModel.validateAndPay();

    expect(showMessage).toHaveBeenCalledWith({
      message: 'Pago Exitoso',
      description: 'El pago se realizó correctamente.',
      type: 'success',
      icon: 'success'
    });
  });

  it('debería mostrar un mensaje de error si createPayment falla', async () => {
    const errorMessage = 'Error en el pago';
    (createPaymentUseCase as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await viewModel.validateAndPay();

    expect(showMessage).toHaveBeenCalledWith({
      message: 'Error',
      description: `Ocurrió un error durante el pago: ${errorMessage}`,
      type: 'danger',
      icon: 'danger'
    });
  });
});
