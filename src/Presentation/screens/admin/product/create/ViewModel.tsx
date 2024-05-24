
import { useContext, useEffect, useState } from "react";
import * as Yup from 'yup';
import * as Font from 'expo-font';
import * as ImagePicker from 'expo-image-picker';
import { showMessage } from "react-native-flash-message";


import { Error, ResponseAPIDelivery } from "../../../../../Data/sources/remote/api/models/ResponseApiDelivery";
import { SaveUserUseCase } from "../../../../../Domain/useCases/UserLocal/SaveUserLocal";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { UpdateFileUseCase } from "../../../../../Domain/useCases/File/UpdateFileUseCase";


interface Values {
    images: string[];
    name: string;
    description: string;
    price: string;
    quantity: string;
}

interface ResponseErrorData {
    path: string;
    value: string;
}

const validationNewProductSchema = Yup.object().shape({
    images: Yup.array().of(Yup.string().required('La imagen es obligatoria')).min(1, 'Debe seleccionar al menos una imagen').max(3, 'No puede seleccionar más de tres imágenes'),
    name: Yup.string().required('El nombre del producto es obligatorio'),
    description: Yup.string().required('La descripción del producto es obligatoria'),
    price: Yup.number().required('El precio es obligatorio'),
    quantity: Yup.number().required('La cantidad es obligatorio')

});

const CreateNewProductViewModel = () => {

    const [values, setValues] = useState<Values>({
        images: [],
        name: '',
        description: '',
        price: '',
        quantity: '',
    });

    const { auth } = useContext(AuthContext);

    const [files, setFiles] = useState<ImagePicker.ImageInfo[]>([]);

    const [errorMessages, setErrorMessages] = useState<Record<string, string>>({});

    const [errorsResponse, setErrorResponses] = useState<ResponseErrorData[]>([]);

    const [loading, setLoading] = useState(false);

    const [price, setPrice] = useState('');

    const [hasNonNumber, setHasNonNumber] = useState(false);

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });

        if (property === 'price') {
            setPrice(value);
            setHasNonNumber(/\D/.test(value));
        }
    };

    const isValidForm = async (): Promise<boolean> => {
        try {
            await validationNewProductSchema.validate(values, { abortEarly: false });
            return true;
        } catch (error) {
            const errors: Record<string, string> = {};
            error.inner.forEach((err: any) => {
                errors[err.path] = err.message;
            });
            setErrorMessages(errors);
            console.log(errorMessages);
            return false;
        }
    };

    const createNewProduct = async () => {
        const isValid = await isValidForm();

        if (isValid) {
            setLoading(true);
            setErrorMessages({});

            try {
                const { images, ...data } = values;

                const response = await CreateNewProductUseCase(data);

                if (response.success) {
                    const dataProduct = response.data;

                    const responseImages = await Promise.all(
                        files.map((file, index) =>
                            UpdateFileUseCase(file, 'products', response.data.id, `image${index}`)
                        )
                    );

                    dataProduct.images = responseImages.map((res) => res.data);

                    await SaveUserUseCase(dataProduct);
                    showMessage({
                        message: 'Producto creado exitosamente',
                        type: 'success',
                        icon: 'success',
                    });
                    setLoading(false);
                }
            } catch (error) {
                const rejectErrors: ResponseAPIDelivery = error;

                if (rejectErrors.error) {
                    setErrorResponses([]);
                    showMessage({
                        message: rejectErrors.error,
                        type: 'danger',
                        icon: 'danger',
                    });
                } else {
                    console.log('Error al crear el producto');

                    const errorsArray = Object.values(rejectErrors.errors);

                    const errorsArrayFilter = errorsArray.map(({ msg, path }) => ({ value: msg, path }));
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
            if (values.images.length < 3) {
                onChange('images', [...values.images, result.assets[0].uri]);
                setFiles([...files, result.assets[0]]);
            } else {
                showMessage({
                    message: 'No puede seleccionar más de tres imágenes',
                    type: 'danger',
                    icon: 'danger',
                });
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
                if (values.images.length < 3) {
                    onChange('images', [...values.images, result.assets[0].uri]);
                    setFiles([...files, result.assets[0]]);
                } else {
                    showMessage({
                        message: 'No puede seleccionar más de tres imágenes',
                        type: 'danger',
                        icon: 'danger',
                    });
                }
            }
        } catch (error) {
            console.log('Error al tomar la foto', error);
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
    };

    return {
        ...values,
        onChange,
        createNewProduct,
        isValidForm,
        loading,
        loadFonts,
        pickImage,
        takePhoto,
        price,
        hasNonNumber,
        errorMessages,
        responseError: errorsResponse,
    };
};

export default CreateNewProductViewModel;
