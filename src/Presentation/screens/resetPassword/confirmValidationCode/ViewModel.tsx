import React, { useContext, useState } from "react";
import { showMessage } from "react-native-flash-message";
import * as Yup from 'yup';

import { AuthContext } from "../../../context/auth/AuthContext";
import { Error, ResponseAPIDelivery } from "../../../../Data/sources/remote/api/models/ResponseApiDelivery";
import { verifyCodeAuthUseCase } from "../../../../Domain/useCases/Auth/AuthVerifyCode";

interface Values {
    code: string;
}

interface ResponseErrorData {
    path: string;
    value: string;
}

const validationConfirmCodeSchema = Yup.object().shape({
    code: Yup.string()
        .length(6, 'El código debe tener 6 caracteres')
        .required('El campo código es obligatorio'),
});

const ConfirmValidationCodeViewModel = (email: string) => {

    const [errorMessages, setErrorMessages] = useState<Record<string, string>>({});

	const [errorsResponse, setErrorResponses] = useState<ResponseErrorData[]>([]);

    const [loading, setLoading] = useState(false);

    const [values, setValues] = useState<Values>({
        code: '',
    });

    const onChange = (property: string, value: string) => {
        setValues({ ...values, [property]: value });
    }

    const isValidForm = async (): Promise<boolean> => {
        try {
            await validationConfirmCodeSchema.validate(values, { abortEarly: false });
            return true;
        } catch (error) {
            const errors: Record<string, string> = {};
            error.inner.forEach((err) => {
                errors[err.path] = err.message;
            });
            setErrorMessages(errors);
            return false;
        }
    }

    const validationCode = async (): Promise<ResponseAPIDelivery> => {

        const isValid = await isValidForm();
        if (isValid) {
            try {
                setLoading(true);
                setErrorMessages({});
                const response = await verifyCodeAuthUseCase(email, values.code)
                if(response.success){
                    return response
                }
            } catch (error) {
                console.log(error);
				const rejectErrors: ResponseAPIDelivery = error;
				if (rejectErrors.error) {
					setErrorResponses([]);
					showMessage({
						message: rejectErrors.message,
						type: 'danger',
						icon: 'danger',
					});
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
    return{
        values,
        errorMessages,
        loading,
        onChange,
        validationCode
    }


}

export default ConfirmValidationCodeViewModel;
