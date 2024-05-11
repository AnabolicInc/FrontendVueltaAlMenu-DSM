import { useContext, useState } from "react";

import * as yup from "yup";
import * as ImagePicker from 'expo-image-picker';

import { AuthContext } from "../../../context/auth/AuthContext";
import { RemoveUserUseCase } from "../../../../Domain/useCases/UserLocal/RemoveUserLocal";
import { UpdateUserUseCase } from "../../../../Domain/useCases/User/UpdateUserUseCase";
import { UpdateFileUseCase } from "../../../../Domain/useCases/File/UpdateFileUseCase";
import { ResponseAPIDelivery } from "../../../../Data/sources/remote/api/models/ResponseApiDelivery";
import { showMessage } from "react-native-flash-message";

interface Values {
    name: string;
    lastName: string;
    phone: string;
    image: string;
}
interface ResponseErrorData{
	
	path: string;
	value: string;

}

const validationSchema = yup.object().shape({
    name: yup.string().required('El nombre es requerido'),
    lastName: yup.string().required('Los apellidos son requeridos'),
    phone: yup.string().required('El teléfono es requerido'),
});

const ProfileUpdateViewModel = () => {

    const { user, updateUser: updateUserContext } = useContext(AuthContext);

    const [values, setValues] = useState<Values>({
        name: user.name,
        lastName: user.lastName,
        phone: user.phone,
        image: '',
    });
    const [file, setFile] = useState<ImagePicker.ImageInfo>();

	const [loading, setLoading] = useState(false);

	const [errorMessages, setErrorMessages] = useState<Record<string, string>>({});

	const [errorsResponse, setErrorResponses] = useState<ResponseErrorData[]>([]);


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
			console.log('Error al tomar la foto', error);
			
		}

	  
	};

    const updateUser = async () => {
        const validForm = isValidForm();

        if (validForm) {
            try{
                setLoading(true);
            
                const { image, ...data } = values;

                // call to use case
                const response = await UpdateUserUseCase(user.id, data.name, data.lastName, data.phone, user.session_token);
                console.log(response);
                

                if (response.success){
                    const dataUser = response.data;
                    dataUser.session_token = user.session_token;
                    
                    if (file !== undefined){
                        const responseImage = await UpdateFileUseCase(file!, 'users', dataUser.id);
                        dataUser.image = responseImage.data;
                    }

                    setLoading(false);
                    updateUserContext(dataUser);
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
    }

    const onChangeInfoUpdate = async (name: string, lastName: string, phone: string) => {
        setValues({ ... values, name, lastName, phone});
    }

    const onChange = (property: string, value: string) => {

		setValues({ ... values, [property]:value});

	};

	const isValidForm = async ():Promise<boolean> => {
		try {
			await validationSchema.validate(values, {abortEarly: false});
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

    return { 
        ...values,
        profile,
        onChange,
        updateUser,
        pickImage,
        takePhoto,
        errorMessages,
        loading,
        file,
        user,
        onChangeInfoUpdate
    };
}

export default ProfileUpdateViewModel;