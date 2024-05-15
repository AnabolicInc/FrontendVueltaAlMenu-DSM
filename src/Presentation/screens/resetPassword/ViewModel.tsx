import React, { useContext, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { showMessage } from "react-native-flash-message";
import * as Yup from 'yup';

import { AuthContext } from "../../context/auth/AuthContext";
import { Error, ResponseAPIDelivery } from "../../../Data/sources/remote/api/models/ResponseApiDelivery";
import { SaveUserUseCase } from "../../../Domain/useCases/UserLocal/SaveUserLocal";
import { UpdateFileUseCase } from "../../../Domain/useCases/File/UpdateFileUseCase";
import { forgotPasswordAuthUseCase } from "../../../Domain/useCases/Auth/AuthResetPassword";


interface Values {

	email: string;

}
interface ResponseErrorData {

	path: string;
	value: string;

}
const validationResetPasswordSchema = Yup.object().shape({

	email: Yup.string().email('Ingrese un correo electrónico válido').required('El campo correo electrónico es obligatorio'),

});
const ForgotPasswordViewModel = () => {



	const [values, setValues] = useState<Values>({
		email: '',
	});


	const [loading, setLoading] = useState(false);

	const [errorMessages, setErrorMessages] = useState<Record<string, string>>({});

	const [errorsResponse, setErrorResponses] = useState<ResponseErrorData[]>([]);


	const onChange = (property: string, value: string) => {

		setValues({ ...values, [property]: value });

	};

	const isValidForm = async (): Promise<boolean> => {
		try {

			await validationResetPasswordSchema.validate(values, { abortEarly: false });
			return true;
		} catch (error) {
			const errors: Record<string, string> = {};
			error.inner.forEach((err) => {
				errors[err.path] = err.message;
			});
			setErrorMessages(errors);
			console.log(errorMessages);
			return false;
		}
	};


	const forgotPassword = async () => {
		console.log(values.email)
		const isValid = await isValidForm();
		console.log(isValid);
		if (isValid) {
			try {

				setLoading(true);
				setErrorMessages({});
				const response = await forgotPasswordAuthUseCase(values.email);
				console.log(response);
				if (response.success) {
					showMessage({
						message: 'Se ha enviado un correo electrónico para restablecer la contraseña',
						type: 'success',
						icon: 'success',
					});
				}
				setLoading(false);

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
			}

		}


	};




	return {
		...values,
		onChange,
		isValidForm,
		forgotPassword,
		errorMessages,
		responseError: errorsResponse,

	}
}

export default ForgotPasswordViewModel;