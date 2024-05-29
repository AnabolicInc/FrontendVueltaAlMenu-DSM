import { useContext, useState } from "react";
import { showMessage } from "react-native-flash-message";

import * as yup from 'yup';
import * as Font from 'expo-font';
import * as ImagePicker from 'expo-image-picker';

import { categoryContext } from "../../../../context/category/CategoryContext";



interface Values {
	image: string;
	name: string;
	description: string;
    precio: string;
    cantidad: string;
	id: string;
}


interface ResponseErrorData{
	
	path: string;
	value: string;

}

const ProductUpdateViewModel = ( route ) => {

	const { categoryItem } = route.params;

	const {updateCategory: updateCategoryContext } =useContext(categoryContext)

	const [loading, setLoading] = useState(false);

    const [errorMessages, setErrorMessages] = useState<Record<string, string>>({});

	const [responseError, setResponseError] = useState<ResponseErrorData[]>([]);

	const [values, setValues] = useState<Values>({
		image: categoryItem.image,
		name: categoryItem.name,
		description: categoryItem.description,
		id: categoryItem.id,
        precio: categoryItem.precio,
        cantidad: categoryItem.cantidad,
	});




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

	const validationSchema = yup.object().shape({
		name: yup.string().required('El nombre es requerido'),
		description: yup.string().required('La descripción es requerida'),
	});

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

	const updateCategory = async () => {
        const validForm = isValidForm();

        if (validForm) {
            try{
                setLoading(true);
            
                const { image, ...data } = values;

				
				
                // call to update method in CategoryContext
                const response = await updateCategoryContext(data.id, data.name, data.description, file);
                console.log(response);
                
                if (response.success){
                    showMessage({
						message: 'Datos actualizados correctamente',
						type: 'success',
						icon: 'success',
					});

                    setLoading(false);
                }
				
            } catch (error) {
                console.log(error);
                setLoading(false);
				showMessage({
					message: 'Error al actualizar los datos',
					type: 'danger',
					icon: 'danger',
				});
            }
        }
    }

    return {
        ...values,
        onChange,
        pickImage,
        takePhoto,
		updateCategory,
        errorMessages,
        responseError,
      };
}

export default ProductUpdateViewModel;