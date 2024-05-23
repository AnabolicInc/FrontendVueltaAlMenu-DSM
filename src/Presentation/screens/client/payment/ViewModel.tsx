import React, { useState } from "react";
import { useFonts } from "expo-font";
import * as Yup from "yup";



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

    const onChange = (property: string, value: string) => {
        if (property === 'rut') {
            handleRUTChange(value);
        }
        else if (property === 'cardNumber') {
            handleCardNumberChange(value);
        }
        else if (property === 'expiryDate') {
            handleExpiryDateChange(value);
        }
        else if (property === 'cvc') {
            setValues({ ...values, cvc: value });
        }
        else if (property === 'holderName') {
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
        text = text.replace(/\D/g, '').substring(0, 4); // Allow only 4 digits
        text = text.replace(/(\d{2})/, '$1/'); // Add slash after 2 digits
        setValues({ ...values, expiryDate: text });
    };

    const handleRUTChange = (text: string) => {
        text = text.replace(/\D/g, '').substring(0, 9); // Allow only 8 digits
        text = text.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2.$3-'); // Add dots and dash
        setValues({ ...values, rut: text });
    };


    return {
        ...values,
        onChange,
        handleCardNumberChange,
        handleExpiryDateChange,
        handleRUTChange,
    };

};
export default PaymentViewModel;