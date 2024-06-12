import { useContext, useState } from "react";
import * as Yup from 'yup';
import * as ImagePicker from 'expo-image-picker';
import { showMessage } from "react-native-flash-message";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { categoryContext } from "../../../../context/category/CategoryContext";
import { ProductContext } from "../../../../context/product/ProductContext";
import { ResponseAPIDelivery } from "../../../../../Data/sources/remote/api/models/ResponseApiDelivery";

interface Values {
    images: string[];
    name: string;
    description: string;
    price: string;
    quantity: string;
    category_id: string;
}

interface ResponseErrorData {
    path: string;
    value: string;
}

const validationNewProductSchema = Yup.object().shape({
    images: Yup.array().min(1, 'La imagen es obligatoria').max(3, 'No puedes seleccionar más de 3 imágenes'),
    name: Yup.string().required('El nombre del producto es obligatorio'),
    description: Yup.string().required('La descripción del producto es obligatoria'),
    price: Yup.string().required('El precio es obligatorio'),
    quantity: Yup.string().required('La cantidad es obligatoria')
});

const CreateNewProductViewModel = () => {
    const [values, setValues] = useState<Values>({
        images: [],
        name: '',
        description: '',
        price: '',
        quantity: '',
        category_id: '',
    });

    const [imageFiles, setImageFiles] = useState<ImagePicker.ImageInfo[]>([]);
    const { auth } = useContext(AuthContext);
    const { currentCategory } = useContext(categoryContext);
    const { createProduct: createProductContext } = useContext(ProductContext);
    const [errorMessages, setErrorMessages] = useState<Record<string, string>>({});
    const [errorsResponse, setErrorResponses] = useState<ResponseErrorData[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasNonNumber, setHasNonNumber] = useState({ price: false, quantity: false });

    const onChange = (property: string, value: any) => {
        if (property === 'images') {
            setValues({ ...values, images: value });
        } else {
            setValues({ ...values, [property]: value });
        }

        if (property === 'price' || property === 'quantity') {
            if (/\D/.test(value)) {
                setHasNonNumber({ ...hasNonNumber, [property]: true });
            } else {
                setHasNonNumber({ ...hasNonNumber, [property]: false });
            }
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

// En CreateNewProductViewModel

const createNewProduct = async () => {
    const isValid = await isValidForm();
    console.log("BOTÓN DE CREAR PRODUCTO PRESIONADO")
    if (isValid) {
        setLoading(true);
        setErrorMessages({});
        try {
            const { images, ...data } = values;

            // Convertir price y quantity a number y establecer category_id a 1
            const dataWithNumbers = {
                ...data,
                price: parseFloat(data.price),
                quantity: parseInt(data.quantity, 10),
                category_id: currentCategory.id,  // Establecer category_id a 1 para pruebas
            };
            console.log("CHECKPOINT")

            const response = await createProductContext(dataWithNumbers, imageFiles);

            if (response.success) {
                showMessage({
                    message: 'Producto creado correctamente',
                    type: 'success',
                    icon: 'success',
                });
                setLoading(false);
                return response.data; // Retornar el producto creado
            } else {
                throw new Error('Failed to create product');
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
                console.log('Error en la creación del producto');
                const errorsArray = Object.values(rejectErrors.errors || {});
                const errorsArrayFilter = errorsArray.map(({ msg, path }) => ({ value: msg, path }));
                console.log(errorsArrayFilter);
                setErrorResponses(errorsArrayFilter);
            }
            setLoading(false);
        }
    }
    return null; // Retornar null si no se creó el producto
};

    

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            if (values.images.length < 3) {
                const newImages = [...values.images, result.assets[0].uri];
                onChange('images', newImages);
                setImageFiles([...imageFiles, result.assets[0]]);
            } else {
                showMessage({
                    message: "Error",
                    description: "Solo se pueden seleccionar hasta 3 imágenes",
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
                    const newImages = [...values.images, result.assets[0].uri];
                    onChange('images', newImages);
                    setImageFiles([...imageFiles, result.assets[0]]);
                } else {
                    showMessage({
                        message: "Error",
                        description: "Solo se pueden seleccionar hasta 3 imágenes",
                        type: 'danger',
                        icon: 'danger',
                    });
                }
            }
        } catch (error) {
            console.log('Error al tomar la foto', error);
        }
    };

    return {
        ...values,
        onChange,
        createNewProduct,
        isValidForm,
        loading,
        pickImage,
        takePhoto,
        hasNonNumber,
        errorMessages,
        responseError: errorsResponse,
        imageFiles,
    };
};

export default CreateNewProductViewModel;
