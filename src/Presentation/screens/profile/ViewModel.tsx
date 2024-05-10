import React, { useContext, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { showMessage } from "react-native-flash-message";
import * as Yup from 'yup';

import { AuthContext } from "../../context/auth/AuthContext";
import { Error, ResponseAPIDelivery } from "../../../Data/sources/remote/api/models/ResponseApiDelivery";
import { SaveUserUseCase } from "../../../Domain/useCases/UserLocal/SaveUserLocal";
import { UpdateFileUseCase } from "../../../Domain/useCases/File/UpdateFileUseCase";



interface Values {
	image: string;
	name: string;
	lastName: string;
	email: string;
	phone: string;
	password: string;
}
interface ResponseErrorData{
	
	path: string;
	value: string;

}
const validationProfileSchema = Yup.object().shape({

	image: Yup.string().required('La imagen es obligatoria'),
	name: Yup.string().required('El campo nombre es obligatorio'),
	lastName: Yup.string().required('El campo apellido es obligatorio'),
	email: Yup.string().email('Ingrese un correo electrónico válido').required('El campo correo electrónico es obligatorio'),
  	phone: Yup.string().required('El campo teléfono es obligatorio').min(9, 'El teléfono ingresado no es valido') ,
	password: Yup.string().required('El campo contraseña es obligatorio').matches(
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/,
		'La contraseña no cumple con los requesitos minimos'
	),
});
const ProfileViewModel = () => {

    
    const {status,user} = useContext(AuthContext);
	
    const [values, setValues] = useState<Values>({
		image: '',
		name: '',
		lastName: '',
		email: '',
		phone: '',
		password: '',
	});
    const [file, setFile] = useState<ImagePicker.ImageInfo>();

	const [loading, setLoading] = useState(false);

	const [errorMessages, setErrorMessages] = useState<Record<string, string>>({});

	const [errorsResponse, setErrorResponses] = useState<ResponseErrorData[]>([]);


	const onChange = (property: string, value: string) => {

		setValues({ ... values, [property]:value});

	};

	const isValidForm = async ():Promise<boolean> => {
		try {
			await validationProfileSchema.validate(values, {abortEarly: false});
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


    const profile = async () => {
        const isValid = await isValidForm();
		console.log(isValid);
		
		if (isValid) {
			setLoading(true);
			setErrorMessages({});
			try {

				const { image, ...data } = values; //Destructurando los datos
				
				console.log('Cambio de datos exitoso');
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
					console.log('Error al modificar datos de usuario');
				
					const errorsArray = Object.values(rejectErrors.errors);

					const errorsArrayFilter = errorsArray.map(({ msg, path }) => ({ value: msg, path }))
					console.log(errorsArrayFilter);
					setErrorResponses(errorsArrayFilter);
					
				}
				setLoading(false);
				
			}
		}
      
    };
    

	const pickImage = async () => {

		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			quality: 1,
		});
		
		if (!result.canceled) {
			onChange('image', result.assets[0].uri);
			setFile(result.assets[0]);
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
				setFile(result.assets[0]);
			}
			
		} catch (error) {
			console.log('error');
			
		}

	  
	};
	

    return{
        profile,
        ...values,
        onChange,
        isValidForm,
        user,
        status,
        loading,
        pickImage,
        takePhoto,
        errorMessages,
        responseError: errorsResponse,
    
    }
}

export default ProfileViewModel;