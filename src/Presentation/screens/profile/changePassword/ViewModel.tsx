import { useContext, useEffect, useState } from "react";
import * as Yup from 'yup';
import * as Font from 'expo-font';
import * as ImagePicker from 'expo-image-picker';
import { showMessage } from "react-native-flash-message";
import { Error, ResponseAPIDelivery } from "../../../../Data/sources/remote/api/models/ResponseApiDelivery";
import { ChangePasswordUseCase } from "../../../../Domain/useCases/User/ChangePasswordUseCase";
import { SaveUserUseCase } from "../../../../Domain/useCases/UserLocal/SaveUserLocal";
import { AuthContext } from "../../../context/auth/AuthContext";

interface Values {
  newPassword: string;
  confirmNewPassword: string;
}

interface ResponseErrorData {
  path: string;
  value: string;
}

const validationChangePasswordSchema = Yup.object().shape({
  newPassword: Yup.string().required('El campo contraseña es obligatorio si desea cambiar contraseña').matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/,
    'La contraseña no cumple con los requisitos mínimos'
  ),
  confirmNewPassword: Yup.string().required('El campo confirmar contraseña es obligatorio').oneOf([Yup.ref('newPassword'), null], 'Las contraseñas no coinciden'),
});

const ChangePasswordViewModel = () => {
  const [values, setValues] = useState<Values>({
    newPassword: '',
    confirmNewPassword: '',
  });

  const { user, updateUser: updateUserContext } = useContext(AuthContext);

  const [errorMessages, setErrorMessages] = useState<Record<string, string>>({});
  const [errorsResponse, setErrorResponses] = useState<ResponseErrorData[]>([]);
  const [loading, setLoading] = useState(false);

  const [password, setPassword] = useState('');

  const [hasEightChars, setHasEightChars] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);

  const onChange = (property: string, value: string) => {
    setValues({ ...values, [property]: value });

    if (property === 'newPassword') {
      setPassword(value);
      setHasEightChars(value.length >= 8);
      setHasUppercase(/[A-Z]/.test(value));
      setHasNumber(/\d/.test(value));
      setHasSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(value));
    }
  };

  const isValidForm = async (): Promise<boolean> => {
    try {
      await validationChangePasswordSchema.validate(values, { abortEarly: false });
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

  const applyNewPassword = async () => {
    console.log(values.newPassword);

    const isValid = await isValidForm();
    console.log(isValid);
    console.log("111111111111111");
    if (isValid) {
      setLoading(true);
      setErrorMessages({});
      try {
        console.log("222222222222222222222");
        const response = await ChangePasswordUseCase(user.email, values.newPassword, user.session_token);
        console.log("Se pasó changepassword");

        if (response.success) {
          const dataUser = response.data;
          console.log("Se pasó const dataUser");

          //await SaveUserUseCase(dataUser);
          console.log("Se pasó SaveUserUseCase");

          //auth(dataUser);
          console.log("Se pasó auth(dataUser)");
          setLoading(false);
          showMessage({
            message: 'Contraseña cambiada exitosamente',
            type: 'success',
            icon: 'success',
          });
          setValues({ newPassword: '', confirmNewPassword: '' });
        }

        console.log('Cambio de contraseña exitoso');
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
          console.log('Error en el cambio de contraseña');

          const errorsArray = Object.values(rejectErrors.errors);

          const errorsArrayFilter = errorsArray.map(({ msg, path }) => ({ value: msg, path }));
          console.log(errorsArrayFilter);
          setErrorResponses(errorsArrayFilter);
        }
        setLoading(false);
      }
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
    applyNewPassword,
    isValidForm,
    loading,
    loadFonts,
    password,
    hasUppercase,
    hasNumber,
    hasSpecialChar,
    hasEightChars,
    errorMessages,
    responseError: errorsResponse,
  };
};

export default ChangePasswordViewModel;
