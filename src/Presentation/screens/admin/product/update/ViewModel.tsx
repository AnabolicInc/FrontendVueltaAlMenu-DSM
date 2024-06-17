import { useContext, useState } from "react";
import { showMessage } from "react-native-flash-message";

import * as yup from 'yup';
import * as Font from 'expo-font';
import * as ImagePicker from 'expo-image-picker';

import { ProductContext } from "../../../../context/product/ProductContext";



interface Values {
	name: string;
	description: string;
    price: number;
    quantity: number;
	id: string;
	image1: string;
	image2: string;
	image3: string;
}


interface ResponseErrorData{
	
	path: string;
	value: string;

}

const ProductUpdateViewModel = ( route ) => {

	const { productItem } = route.params;

	const {updateProduct: updateProductContext } =useContext(ProductContext)

	const [loading, setLoading] = useState(false);

    const [errorMessages, setErrorMessages] = useState<Record<string, string>>({});

	const [responseError, setResponseError] = useState<ResponseErrorData[]>([]);

	const [fontsLoaded, setFontsLoaded] = useState(false);

	const [values, setValues] = useState<Values>({
		name: productItem.name,
		description: productItem.description,
		price: productItem.price,
		quantity: productItem.quantity,
		id: productItem.id,
		image1: productItem.images[0].uri,
		image2: productItem.images[1].uri,
		image3: productItem.images[2].uri,
	});

    const onChange = (property: string, value: string) => {

		setValues({ ... values, [property]:value});

	};

    const [file1, setfile1] = useState<ImagePicker.ImageInfo>();
    const [file2, setfile2] = useState<ImagePicker.ImageInfo>();
    const [file3, setfile3] = useState<ImagePicker.ImageInfo>();

	const pickImage = async (numberImage: number) => {

		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			quality: 1,
		});
		
		if (!result.canceled) {
			await assignFile(result, numberImage)
		}

	};

	const assignFile = async (result: ImagePicker.ImagePickerResult, numberImage: number) => {
		
			switch (numberImage) {
				case 1:
					onChange('image1', result.assets[0].uri);
					setfile1(result.assets[0]);
					break;
				case 2:
					onChange('image2', result.assets[0].uri);
					setfile2(result.assets[0]);
					break;
				case 3:
					onChange('image3', result.assets[0].uri);
					setfile3(result.assets[0]);
					break;
				default:
					break;
			}
	
	}



	const takePhoto = async (numberImage: number) => {
		
		try {
			let result = await ImagePicker.launchCameraAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				quality: 1,
			});
	
			if (!result.canceled) {
				await assignFile(result, numberImage)
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

	const updateProduct = async () => {
        const validForm = isValidForm();

        if (validForm) {
            try{
                setLoading(true);
            
                const { ...data } = values;

		
                // call to update method in ProductContext
                const response = await updateProductContext(data.id, data.name, data.description, data.price, data.quantity);
                console.log(response);
                
                if (response.success){
                    showMessage({
						message: 'Datos actualizados correctamente',
						type: 'success',
						icon: 'success',
					});               
                }
				setLoading(false);
				
            } catch (error) {
                //console.log(error);
                setLoading(false);
				showMessage({
					message: 'Error al actualizar los datos',
					type: 'danger',
					icon: 'danger',
				});
            }
        }
    }

	
    /**
     * Loads the required fonts asynchronously.
     */
    const loadFonts = async () => {
        await Font.loadAsync({
            'Poppins-Black': require('../../../../../../assets/fonts/Poppins-Black.ttf'),
        });
        setFontsLoaded(true);
    };

    return {
        ...values,
        onChange,
		loadFonts,
		fontsLoaded,
        pickImage,
        takePhoto,
		updateProduct,
        errorMessages,
        responseError,

      };
}

export default ProductUpdateViewModel;