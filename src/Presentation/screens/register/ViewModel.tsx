import { useEffect, useState } from "react";
import * as Yup from 'yup';
import * as Font from 'expo-font';
import { error } from "console";
import { RegisterAuthUseCase } from "../../../Domain/useCases/Auth/AuthRegister";




interface Values{

	image:string;
	name: string;
	lastName: string;
	email: string;
	phone: string;
	password: string;
	confirmPassword: string;

}

interface ResponseErrorData{
	
	path: string;
	value: string;

}

const validationRegisterSchema = Yup.object().shape({

	name: Yup.string().required('El campo nombre es obligatorio'),
	lastName: Yup.string().required('El campo apellido es obligatorio'),
	email: Yup.string().email('Ingrese un correo electrónico válido').required('El campo correo electrónico es obligatorio'),
  	phone: Yup.string().required('El campo teléfono es obligatorio').matches( /^[0-9]{10}$/, 'El número de teléfono debe tener 10 dígitos'),
	password: Yup.string().required('El campo contraseña es obligatorio').matches(
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/,
		'La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un caracter especial'
	),
	confirmPassword: Yup.string().required('El campo confirmar contraseña es obligatorio').oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden'),
});

const loadFonts = async () => {
  try {
      await Font.loadAsync({Poppins: require('../../../../assets/fonts/Poppins-Regular.ttf'), });
      return true;
  } catch (error) {
      console.log('Error loading fonts', error);
      return false;
  }
}

const RegisterViewModel = () => {
	

	/* {Start} Password requeriment validation*/
	const [password, setPassword] = useState('');
	const [hasEightChars, setHasEightChars] = useState(false);
	const [hasUppercase, setHasUppercase] = useState(false);
	const [hasNumber, setHasNumber] = useState(false);
	const [hasSpecialChar, setHasSpecialChar] = useState(false);
  
	const handlePasswordChange = (text) => {
	  setPassword(text);
	  setHasEightChars(text.length >= 8);
	  setHasUppercase(/[A-Z]/.test(text));
	  setHasNumber(/\d/.test(text));
	  setHasSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(text));
	};
	/* {End} Password requeriment validation */
	
	

	/* {Start} Register logic */

	const [values, setValues] = useState<Values>({
		image: '',
		name: '',
		lastName: '',
		email: '',
		phone: '',
		password: '',
		confirmPassword: '',
	});

	const [errorMessages, setErrorMessages] = useState<Record<string, string>>({});

	const [responseError, setResponseError] = useState<ResponseErrorData[]>([]);

	const onChange = (property: string, value: string) => {
		// Actualiza el estado del campo correspondiente cuando cambia el valor

		setValues({ ... values, [property]:value});

	};

	const register =  async () => {
		const isValid = await isValidForm();
		console.log(isValid);
		// Lógica para realizar el registro
		
		if (isValid) {
		try {
			//const response = RegisterAuthUseCase();
			console.log('Registro exitoso');
		} catch (error) {
			console.log('Error en el registro', error);
		}
		} else {
			console.log('Formulario no válido. Por favor, complete todos los campos.');
		}
	};

	const isValidForm = async ():Promise<boolean> => {
		try {
		await validationRegisterSchema.validate(values, {abortEarly: false});
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
	/* {End} Register logic */

	const loadFonts = async () => {
	try {
		await Font.loadAsync({
			Poppins: require('../../../../assets/fonts/Poppins-Regular.ttf'),
		});
		return true;
	} catch (error) {
		console.log('Error loading fonts', error);
		return false;
	}
}

  return {
	
    onChange,
    register,
    isValidForm,
    loadFonts,
	handlePasswordChange,
	password,
	hasUppercase,
	hasNumber,
	hasSpecialChar,
	hasEightChars,
	errorMessages,
	responseError,
  };
};



export default RegisterViewModel;
