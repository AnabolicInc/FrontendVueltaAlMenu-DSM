import React, { useContext, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { showMessage } from "react-native-flash-message";
import * as Yup from 'yup';

import { AuthContext } from "../../context/auth/AuthContext";
import { Error, ResponseAPIDelivery } from "../../../Data/sources/remote/api/models/ResponseApiDelivery";
import { SaveUserUseCase } from "../../../Domain/useCases/UserLocal/SaveUserLocal";
import { UpdateFileUseCase } from "../../../Domain/useCases/File/UpdateFileUseCase";


interface Values {

	email: string;

}
interface ResponseErrorData{
	
	path: string;
	value: string;

}
const validationResetPasswordSchema = Yup.object().shape({

	email: Yup.string().email('Ingrese un correo electrónico válido').required('El campo correo electrónico es obligatorio'),

});
const ProfileViewModel = () => {

    
    
    const [values, setValues] = useState<Values>({
		email: '',
	});


	const [loading, setLoading] = useState(false);

	const [errorMessages, setErrorMessages] = useState<Record<string, string>>({});

	const [errorsResponse, setErrorResponses] = useState<ResponseErrorData[]>([]);


	const onChange = (property: string, value: string) => {

		setValues({ ... values, [property]:value});

	};

	const isValidForm = async ():Promise<boolean> => {
		try {
			await validationResetPasswordSchema.validate(values, {abortEarly: false});
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


    const resetPassword = async () => {

        
      
    };
    



    return{
        ...values,
        onChange,
        isValidForm,
        errorMessages,
        responseError: errorsResponse,
    
    }
}

export default ProfileViewModel;