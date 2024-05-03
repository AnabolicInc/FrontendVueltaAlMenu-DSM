import { useEffect, useState } from "react";
import * as Yup from 'yup';
import * as Font from 'expo-font';
import * as ImagePicker from 'expo-image-picker';
import { showMessage } from "react-native-flash-message";

import { RegisterAuthUseCase } from "../../../Domain/useCases/Auth/AuthRegister";
import { Error, ResponseAPIDelivery } from "../../../Data/sources/remote/api/models/ResponseApiDelivery";
import { User } from "../../../Domain/entities/User";



interface Values {
	image: string;
	name: string;
	lastName: string;
	email: string;
	phone: string;
	password: string;
	confirmPassword?: string;
}


interface ResponseErrorData{
	
	path: string;
	value: string;

}

const validationRegisterSchema = Yup.object().shape({

	image: Yup.string().required('La imagen es obligatoria'),
	name: Yup.string().required('El campo nombre es obligatorio'),
	lastName: Yup.string().required('El campo apellido es obligatorio'),
	email: Yup.string().email('Ingrese un correo electrónico válido').required('El campo correo electrónico es obligatorio'),
  	phone: Yup.string().required('El campo teléfono es obligatorio').max(9, 'El campo teléfono debe tener 9 digitos') ,
	password: Yup.string().required('El campo contraseña es obligatorio').matches(
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/,
		'La contraseña no cumple con los requesitos minimos'
	),
	confirmPassword: Yup.string().required('El campo confirmar contraseña es obligatorio').oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden'),
});



const RegisterViewModel = () => {


	const [errorMessages, setErrorMessages] = useState<Record<string, string>>({});

	const [errorsResponse, setErrorResponses] = useState<ResponseErrorData[]>([]);

	const [values, setValues] = useState<Values>({
		image: '',
		name: '',
		lastName: '',
		email: '',
		phone: '',
		password: '',
		confirmPassword: '',
	});

	const [password, setPassword] = useState('');
	const [hasEightChars, setHasEightChars] = useState(false);
	const [hasUppercase, setHasUppercase] = useState(false);
	const [hasNumber, setHasNumber] = useState(false);
	const [hasSpecialChar, setHasSpecialChar] = useState(false);
	
	const onChange = (property: string, value: string) => {

		setValues({ ... values, [property]:value});

		if(property === 'password'){
			setPassword(value);
			setHasEightChars(value.length >= 8);
			setHasUppercase(/[A-Z]/.test(value));
			setHasNumber(/\d/.test(value));
			setHasSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(value));
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


	const register =  async () => {

		const isValid = await isValidForm();
		console.log(isValid);
		
		if (isValid) {
			setErrorMessages({});
			try {

				const user: User = {
					image: values.image,
					name: values.name,
					lastName: values.lastName,
					email: values.email,
					phone: values.phone,
					password: values.password,
				};
				console.log('User: ', user);


				const response = await RegisterAuthUseCase(user);

				console.log(response);
				
				
				if(response.success){
					console.log(response.success);
				}
				
				console.log('Registro exitoso');
			} catch (error) {
				const rejectErrors: ResponseAPIDelivery = error;

				if(rejectErrors.error){
					setErrorResponses([]);
					showMessage({
						message: rejectErrors.error,
						type: 'danger',
						icon: 'danger',
					});
				}else{
					console.log('Error en el registro');
				
					const errorsArray = Object.values(rejectErrors.errors);

					const errorsArrayFilter = errorsArray.map(({ msg, path }) => ({ value: msg, path }))
					console.log(errorsArrayFilter);
					setErrorResponses(errorsArrayFilter);
					
				}
				
			}
		}
	};

	

	const [file, setfile] = useState<ImagePicker.ImageInfo>();

	const pickImage = async () => {

		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			quality: 1,
		});
		
		if (!result.canceled) {
			onChange('image', result.assets[0].uri);
			setfile(result.assets[0]);
		}
		
	};


	const takePhoto = async () => {
		
		try {
			let result = await ImagePicker.launchCameraAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				quality: 1,
			});
	
			if (!result.canceled) {
				onChange('image', result.assets[0].uri);
				setfile(result.assets[0]);
			}
			
		} catch (error) {
			console.log('error');
			
		}

	  
	};
	
	

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
	...values,
    onChange,
    register,
    isValidForm,
    loadFonts,
	pickImage,
	takePhoto,
	password,
	hasUppercase,
	hasNumber,
	hasSpecialChar,
	hasEightChars,
	errorMessages,
	responseError: errorsResponse,
  };
};



export default RegisterViewModel;
