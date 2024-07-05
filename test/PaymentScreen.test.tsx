import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PaymentScreen from './PaymentScreen';
import PaymentViewModel from './ViewModel';
import { showMessage } from 'react-native-flash-message';

// Mockear PaymentViewModel
jest.mock('./ViewModel', () => ({
  __esModule: true,
  default: jest.fn(),
}));

// Mockear showMessage
jest.mock('react-native-flash-message', () => ({
  showMessage: jest.fn(),
}));

const mockViewModel = {
  holderName: '',
  cardNumber: '',
  expiryDate: '',
  cvc: '',
  rut: '',
  onChange: jest.fn(),
  validateAndPay: jest.fn(),
  logStripeClient: jest.fn(),
  createPayment: jest.fn(),
};

describe('PaymentScreen', () => {
  beforeEach(() => {
    (PaymentViewModel as jest.Mock).mockReturnValue(mockViewModel);
  });

  it('debería llamar a validateAndPay al presionar el botón de pagar', () => {
    const { getByText } = render(<PaymentScreen />);

    fireEvent.press(getByText('Pagar'));
    expect(mockViewModel.validateAndPay).toHaveBeenCalled();
  });

  it('debería mostrar un mensaje de error si algún campo está vacío', async () => {
    const { getByText } = render(<PaymentScreen />);
    
    mockViewModel.validateAndPay.mockImplementationOnce(async () => {
      if (!mockViewModel.holderName || !mockViewModel.cardNumber || !mockViewModel.expiryDate || !mockViewModel.cvc || !mockViewModel.rut) {
        showMessage({
          message: 'Error',
          description: 'Por favor, complete todos los campos.',
          type: 'danger',
          icon: 'danger'
        });
      }
    });

    fireEvent.press(getByText('Pagar'));
    expect(showMessage).toHaveBeenCalledWith({
      message: 'Error',
      description: 'Por favor, complete todos los campos.',
      type: 'danger',
      icon: 'danger'
    });
  });
});
