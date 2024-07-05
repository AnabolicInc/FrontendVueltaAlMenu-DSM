import React, { useState } from 'react';
import * as Yup from 'yup';
import { createPaymentUseCase } from '../../../../Domain/useCases/Payment/PaymentUseCase';
import { PaymentData } from '../../../../Domain/entities/Payment';
import { showMessage } from 'react-native-flash-message';

interface Values {
  holderName: string;
  cardNumber: string;
  expiryDate: string;
  cvc: string;
  rut: string;
}

interface ResponseErrorData {
  path: string;
  value: string;
}

const validationPaymentSchema = Yup.object().shape({
  holderName: Yup.string().required('El campo nombre es obligatorio'),
  cardNumber: Yup.string().required('El campo número de tarjeta es obligatorio'),
  expiryDate: Yup.string().required('El campo fecha de expiración es obligatorio'),
  cvc: Yup.string().required('El campo cvc es obligatorio'),
  rut: Yup.string().required('El campo rut es obligatorio').matches(
    /^\d{1,2}\.\d{3}\.\d{3}-[0-9kK]{1}$/,
    'El rut ingresado no es valido'
  ),
});

const PaymentViewModel = () => {
  const [errorMessages, setErrorMessages] = useState<Record<string, string>>({});

  const [errorsResponse, setErrorResponses] = useState<ResponseErrorData[]>([]);

  const [values, setValues] = useState<Values>({
    holderName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    rut: '',
  });

  const validateAndPay = async () => {
    if (!values.holderName || !values.cardNumber || !values.expiryDate || !values.cvc || !values.rut) {
      showMessage({
        message: 'Error',
        description: 'Por favor, complete todos los campos.',
        type: 'danger',
        icon: 'danger'
      });
      return;
    }

    logStripeClient();
    console.log("ViewModel: Calling createPayment");
    try {
      const response = await createPayment();
      console.log("ViewModel: createPayment called successfully", response);
      showMessage({
        message: 'Pago Exitoso',
        description: 'El pago se realizó correctamente.',
        type: 'success',
        icon: 'success'
      });
    } catch (error) {
      console.error("ViewModel: Error during payment", error);
      showMessage({
        message: 'Error',
        description: 'Ocurrió un error durante el pago: ' + error.message,
        type: 'danger',
        icon: 'danger'
      });
    }
  };

  const createPayment = async () => {
    try {
      console.log("ViewModel: Preparing payment data");
      const paymentData: PaymentData = {
        holderName: values.holderName,
        cardNumber: values.cardNumber,
        expiryDate: values.expiryDate,
        cvc: values.cvc,
        rut: values.rut,
      };
      console.log("ViewModel: Payment data prepared", paymentData);
      const response = await createPaymentUseCase(paymentData);
      console.log("ViewModel: Payment created successfully", response);
      if (response.error) {
        throw response.error;
      }
      return response;
    } catch (error) {
      console.error('ViewModel: Payment error: ', error);
      throw error;
    }
  };

  const logStripeClient = () => {
    console.log('ViewModel: Payment Data: ', values);
  };

  const onChange = (property: string, value: string) => {
    if (property === 'rut') {
      handleRUTChange(value);
    } else if (property === 'cardNumber') {
      handleCardNumberChange(value);
    } else if (property === 'expiryDate') {
      handleExpiryDateChange(value);
    } else if (property === 'cvc') {
      setValues({ ...values, cvc: value });
    } else if (property === 'holderName') {
      setValues({ ...values, holderName: value });
    }
  };

  const handleCardNumberChange = (text: string) => {
    text = text.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
    let cleanedText = text.replace(/\s?/g, '');
    if (cleanedText.length > 16) {
      cleanedText = cleanedText.slice(0, 16);
    }
    text = cleanedText.replace(/(\d{4})/g, '$1 ').trim();
    setValues({ ...values, cardNumber: text });
  };

  const handleExpiryDateChange = (text: string) => {
    text = text.replace(/\D/g, '').substring(0, 4); 
    text = text.replace(/(\d{2})/, '$1/'); 
    setValues({ ...values, expiryDate: text });
  };

  const handleRUTChange = (text: string) => {
    text = text.replace(/\D/g, '').substring(0, 9); 
    text = text.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2.$3-'); 
    setValues({ ...values, rut: text });
  };

  return {
    ...values,
    onChange,
    handleCardNumberChange,
    handleExpiryDateChange,
    handleRUTChange,
    logStripeClient,
    createPayment,
    validateAndPay,
  };
};

export default PaymentViewModel;
