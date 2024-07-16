import { useContext, useState } from "react";
import * as Yup from 'yup';
import * as ImagePicker from 'expo-image-picker';
import { ResponseAPIDelivery } from "../../../../../Data/sources/remote/api/models/ResponseApiDelivery";
import { showMessage } from "react-native-flash-message";
import { categoryContext } from "../../../../context/category/CategoryContext";

interface Values {
	image: string;
	name: string;
	description: string;
}


interface ResponseErrorData{
	
	path: string;
	value: string;

}
const validationCategorySchema = Yup.object().shape({

	image: Yup.string().required('La imagen es obligatoria'),
	name: Yup.string().required('El campo nombre es obligatorio'),
	description: Yup.string().required('El campo descripción es obligatorio'),

	});

const CategoryCreateViewModel = () => {


	const { createCategory: createCategoryContext } = useContext(categoryContext);
	const [errorsResponse, setErrorResponses] = useState<ResponseErrorData[]>([]);
    const [errorMessages, setErrorMessages] = useState<Record<string, string>>({});
	const [responseError, setResponseError] = useState<ResponseErrorData[]>([]);

	const [values, setValues] = useState<Values>({
		image: '',
		name: '',
		description: '',
	});
	
	const [loading, setLoading] = useState(false);

    const onChange = (property: string, value: string) => {

		setValues({ ... values, [property]:value});

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

	const isValidForm = async ():Promise<boolean> => {
		try {
			await validationCategorySchema.validate(values, {abortEarly: false});
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

	const createCategory = async () => {

		const isValid = await isValidForm();
		console.log(isValid);
		
		if (isValid) {
			setLoading(true);
			setErrorMessages({});
			try {

				const { image, ...data } = values; //Destructurando los datos

				const response = await createCategoryContext(data, file);
				
				if(response.success){

					showMessage({
						message: 'Categoría creada correctamente',
						type: 'success',
						icon: 'success',
					});

					setLoading(false);
					console.log('Creación de categoría exitoso');
				}
				
				

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
					console.log('Error en la creación de categoría');
					showMessage({
						message: 'Error al crear la categoría',
						type: 'danger',
						icon: 'danger',
					});
				}
				setLoading(false);
				
			}
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

    return {
        ...values,
		createCategory,
        onChange,
        pickImage,
        takePhoto,
        errorMessages,
        responseError: errorsResponse,
		loading,
      };
}

export default CategoryCreateViewModel;