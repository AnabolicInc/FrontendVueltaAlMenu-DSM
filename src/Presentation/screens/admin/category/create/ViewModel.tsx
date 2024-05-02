import { useEffect, useState } from "react";
import * as Yup from 'yup';
import * as Font from 'expo-font';
import * as ImagePicker from 'expo-image-picker';






interface Values {
	image: string;
	name: string;
	description: string;
}


interface ResponseErrorData{
	
	path: string;
	value: string;

}

const CategoryCreateViewModel = () => {



    const [errorMessages, setErrorMessages] = useState<Record<string, string>>({});

	const [responseError, setResponseError] = useState<ResponseErrorData[]>([]);

	const [values, setValues] = useState<Values>({
		image: '',
		name: '',
		description: '',
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

    return {
        ...values,
        onChange,
        pickImage,
        takePhoto,
        errorMessages,
        responseError,
      };
}

export default CategoryCreateViewModel;