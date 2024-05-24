
import { useContext, useState } from "react";
import * as Yup from 'yup';
import * as Font from 'expo-font';
import * as ImagePicker from 'expo-image-picker';
import { showMessage } from "react-native-flash-message";
import { AuthContext } from "../../../context/auth/AuthContext";
import { SaveUserUseCase } from "../../../../Domain/useCases/UserLocal/SaveUserLocal";
import { UpdateFileUseCase } from "../../../../Domain/useCases/File/UpdateFileUseCase";

interface Values {
    image1: string;
    image2: string;
    image3: string;
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
    image: Yup.string().required('La imagen es obligatoria'),
    name: Yup.string().required('El nombre del producto es obligatorio'),
    description: Yup.string().required('La descripción del producto es obligatoria'),
    price: Yup.string().required('El precio es obligatorio'),
    quantity: Yup.string().required('La cantidad es obligatoria')
});

const CreateNewProductViewModel = () => {
    const [values, setValues] = useState<Values>({
        image1: '',
        image2: '',
        image3: '',
        name: '',
        description: '',
        price: '',
        quantity: '',
    });

    const { auth } = useContext(AuthContext);
    const [file, setFile] = useState<ImagePicker.ImageInfo>();
    const [errorMessages, setErrorMessages] = useState<Record<string, string>>({});
    const [errorsResponse, setErrorResponses] = useState<ResponseErrorData[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasNonNumber, setHasNonNumber] = useState({ price: false, quantity: false });
    const [selectedImages, setSelectedImages] = useState<string[]>([]);

    const onChange = (property: string, value: string) => {
        if (property === 'price' || property === 'quantity') {
            if (/\D/.test(value)) {
                setHasNonNumber({ ...hasNonNumber, [property]: true });
            } else {
                setHasNonNumber({ ...hasNonNumber, [property]: false });
            }
        }

        setValues({ ...values, [property]: value });
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
                const { image, ...data } = values;

                if (true) { // Mock response success
                    const dataProduct = {}; // Mock data product

                    // const responseImages = await UpdateFileUseCase(file, 'products', response.data.id, 'image');

                    dataProduct.image = ''; // Mock response image

                    await SaveUserUseCase(dataProduct);
                    showMessage({
                        message: 'Producto creado exitosamente',
                        type: 'success',
                        icon: 'success',
                    });
                    setLoading(false);
                }
            } catch (error) {
                const rejectErrors: any = error; // Mock error type

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
            // Buscar la primera variable de imagen que esté vacía y asignarle la URI de la imagen seleccionada
            const emptyImageKey = Object.keys(values).find((key) => key.startsWith('image') && !values[key]);
            if (emptyImageKey) {
                onChange(emptyImageKey, result.assets[0].uri);
                setFile(result.assets[0]);
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
                // Buscar la primera variable de imagen que esté vacía y asignarle la URI de la imagen tomada
                const emptyImageKey = Object.keys(values).find((key) => key.startsWith('image') && !values[key]);
                if (emptyImageKey) {
                    onChange(emptyImageKey, result.assets[0].uri);
                    setFile(result.assets[0]);
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
        hasNonNumber,
        errorMessages,
        responseError: errorsResponse,
    };
};

export default CreateNewProductViewModel;
