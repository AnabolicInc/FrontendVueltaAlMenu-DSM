import { useContext, useState } from "react"
import { LoginAuthUseCase } from "../../../Domain/useCases/Auth/AuthLogin"
import * as yup from 'yup';
import { showMessage } from "react-native-flash-message";
import { AuthContext } from "../../context/auth/AuthContext";
import { SaveUserUseCase } from "../../../Domain/useCases/UserLocal/SaveUserLocal";
import { ResponseAPIDelivery } from "../../../Data/sources/remote/api/models/ResponseApiDelivery";

const validationLoginSchema = yup.object().shape({
    email: yup.string().email('Ingrese un correo electrónico válido').required('El correo electrónico es requerido'),
    password: yup.string().required('La contraseña es requerida'),
});

const LoginViewModel = () => {

    const { auth } = useContext(AuthContext);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleEmailChange = (email: string) => {
        setEmail(email);
    }
    
    const handlePasswordChange = (password: string) => {
        setPassword(password);
    }

    const login = async () => {
        try {
            const response = await LoginAuthUseCase(email, password);
            if (response.success) {
                await SaveUserUseCase(response.data);
                auth(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return {
        email,
        password,
        handleEmailChange,
        handlePasswordChange,
        login
    }
}

export default LoginViewModel
