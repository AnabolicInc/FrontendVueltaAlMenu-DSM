import React, { useState } from "react";
import { showMessage } from "react-native-flash-message";
import * as Yup from 'yup';

import { ResponseAPIDelivery } from "../../../../../Data/sources/remote/api/models/ResponseApiDelivery";
import { AuthRepositoryImpl } from "../../../../../Data/repositories/AuthRepository";

interface Values {
    newPassword: string;
    confirmPassword: string;
}

interface ResponseErrorData {
    path: string;
    value: string;
}

const validationChangePasswordSchema = Yup.object().shape({
    newPassword: Yup.string()
        .min(6, 'La nueva contraseña debe tener al menos 6 caracteres')
        .required('El campo nueva contraseña es obligatorio'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword')], 'Las contraseñas deben coincidir')
        .required('El campo confirmar nueva contraseña es obligatorio'),
});

const ChangePasswordViewModel = (email: string) => {
    const [errorMessages, setErrorMessages] = useState<Record<string, string>>({});
    const [errorsResponse, setErrorResponses] = useState<ResponseErrorData[]>([]);
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState<Values>({
        newPassword: '',
        confirmPassword: '',
    });

    const authRepository = new AuthRepositoryImpl();

    const onChange = (property: string, value: string) => {
        setValues({ ...values, [property]: value });
    }

    const isValidForm = async (): Promise<boolean> => {
        try {
            await validationChangePasswordSchema.validate(values, { abortEarly: false });
            return true;
        } catch (error) {
            const errors: Record<string, string> = {};
            error.inner.forEach((err: any) => {
                errors[err.path] = err.message;
            });
            setErrorMessages(errors);
            return false;
        }
    }

    const changePassword = async (): Promise<ResponseAPIDelivery> => {
        const isValid = await isValidForm();
        if (isValid) {
            try {
                setLoading(true);
                setErrorMessages({});
                const response = await authRepository.newPassword(email, values.newPassword);
                if (response.success) {
                    showMessage({
                        message: 'Contraseña cambiada exitosamente',
                        type: 'success',
                        icon: 'success',
                    });
                    return response;
                }
                setLoading(false);
            } catch (error) {
                console.log(error);
                const rejectErrors: ResponseAPIDelivery = error;
                if (rejectErrors.error) {
                    setErrorResponses([]);
                    if (error.response && error.response.status === 401) {
                        showMessage({
                            message: 'No autorizado. Por favor, inicie sesión nuevamente.',
                            type: 'danger',
                            icon: 'danger',
                        });
                        // Opcional: Redirigir a la pantalla de inicio de sesión
                    } else {
                        showMessage({
                            message: rejectErrors.message,
                            type: 'danger',
                            icon: 'danger',
                        });
                    }
                } else {
                    const errorsArray = Object.values(rejectErrors.errors);
                    const errorsArrayFilter = errorsArray.map(({ msg, path }) => ({ value: msg, path }));
                    setErrorResponses(errorsArrayFilter);
                }
                setLoading(false);
                return rejectErrors;
            }
        }
    }

    return {
        ...values,
        errorMessages,
        loading,
        onChange,
        changePassword,
        responseError: errorsResponse,
    }
}

export default ChangePasswordViewModel;
