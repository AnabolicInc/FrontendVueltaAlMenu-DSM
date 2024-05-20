import { useEffect, useState } from "react";
import { showMessage } from "react-native-flash-message";

import * as yup from 'yup';
import * as Font from 'expo-font';
import * as ImagePicker from 'expo-image-picker';

import { UpdateCategoryUseCase } from "../../../../../Domain/useCases/Category/UpdateCategoryUseCase";
import { UpdateFileUseCase } from "../../../../../Domain/useCases/File/UpdateFileUseCase";


interface Values {
	image: string;
	name: string;
	description: string;
	id: string;
}


interface ResponseErrorData{
	
	path: string;
	value: string;

}

const CategoryUpdateViewModel = ( route ) => {

	const { categoryItem } = route.params;

	const [loading, setLoading] = useState(false);

    const [errorMessages, setErrorMessages] = useState<Record<string, string>>({});

	const [responseError, setResponseError] = useState<ResponseErrorData[]>([]);

	const [values, setValues] = useState<Values>({
		image: categoryItem.image,
		name: categoryItem.name,
		description: categoryItem.description,
		id: categoryItem.id,
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

                // call to use case
                const response = await UpdateCategoryUseCase(data.id, data.name, data.description);
                console.log(response);
                
				
                if (response.success){
                    const dataCategory = response.data;
                    
                    if (file !== undefined){
                        const responseImage = await UpdateFileUseCase(file!, 'categories', dataCategory.id);
                        dataCategory.image = responseImage.data;
                    }

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

export default CategoryUpdateViewModel;