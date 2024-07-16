import { useContext, useState, useEffect } from "react";
import * as Yup from 'yup';
import { ResponseAPIDelivery } from "../../../../../Data/sources/remote/api/models/ResponseApiDelivery";
import { showMessage } from "react-native-flash-message";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { addressContext } from "../../../../context/address/AddressContext";

interface Values {
	address: string;
	neighborhood: string;
	latitud: number;
	longitud: number;
}

interface ResponseErrorData {
	path: string;
	value: string;
}

const validationCategorySchema = Yup.object().shape({
	address: Yup.string().required('El nombre de la dirección es obligatorio'),
	neighborhood: Yup.string().required('El barrio es obligatorio'),
	latitud: Yup.number().required('La latitud es obligatoria'),
	longitud: Yup.number().required('La longitud es obligatoria')
});

const AddressCreateViewModel = () => {

	const { createAddress: createAddressContext } = useContext(addressContext);
	const { user } = useContext(AuthContext);

	const [errorsResponse, setErrorResponses] = useState<ResponseErrorData[]>([]);
	const [errorMessages, setErrorMessages] = useState<Record<string, string>>({});
	const [responseError, setResponseError] = useState<ResponseErrorData[]>([]);
	const [loading, setLoading] = useState(false);

	const [values, setValues] = useState<Values>({
		address: '',
		neighborhood: '',
		latitud: 0,
		longitud: 0,
	});

	const onChange = (property: string, value: string) => {
		setValues({ ...values, [property]: value });
	};

	const isValidForm = async (): Promise<boolean> => {
		try {
			await validationCategorySchema.validate(values, { abortEarly: false });
			return true;
		} catch (error) {
			const errors: Record<string, string> = {};
			(error as Yup.ValidationError).inner.forEach((err) => {
				errors[err.path] = err.message;
			});
			setErrorMessages(errors);
			return false;
		}
	};

	const createAddress = async () => {
		const isValid = await isValidForm();
		if (isValid) {
			setLoading(true);
			setErrorMessages({});
			try {
				console.log('Address created 2');
				const addressData = { ...values, user_id: user.id };
				const response = await createAddressContext(addressData);
				console.log('Address created 3');

				if (response.success) {
					showMessage({
						message: 'Dirección creada correctamente',
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
					showMessage({
						message: 'Error al crear la dirección',
						type: 'danger',
						icon: 'danger',
					});
				}
				setLoading(false);
			}
		}
	};

	return {
		values,
		createAddress,
		onChange,
		errorMessages,
		responseError: errorsResponse,
		setValues
	};
};

export default AddressCreateViewModel;