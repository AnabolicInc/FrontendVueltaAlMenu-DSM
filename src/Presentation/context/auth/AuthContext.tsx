import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { User } from '../../../Domain/entities/User';
import { AuthState, authReducer } from './AuthReducer';
import { GetUserUseCase } from '../../../Domain/useCases/UserLocal/GetUserLocal';
import { VerifyTokenUserCase } from '../../../Domain/useCases/UserLocal/VerifyTokenUserLocal';
import { RemoveUserUseCase } from '../../../Domain/useCases/UserLocal/RemoveUserLocal';
import { UpdateUserUseCase } from '../../../Domain/useCases/User/UpdateUserUseCase';
import { SaveUserUseCase } from '../../../Domain/useCases/UserLocal/SaveUserLocal';


type AuthContextProps = {

    user: User | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    auth: (user: User) => void;
    logout: () => void;
    checkToken: () => void;
    updateUser: (user: User) => void;    

}

const authInitialState: AuthState = {
    status: 'checking',
    user: null
}

export const AuthContext = createContext({} as AuthContextProps);

export const  AuthProvider = ({ children }: any) => {

    useEffect(() => {
        checkToken();
    }, []);
    
    const [state, dispatch] = useReducer(authReducer, authInitialState);

    const checkToken = async () => {

        const user = await GetUserUseCase();

        if (!user) return dispatch({ type: 'not-authenticated' });

        try {
            
            const respose = await VerifyTokenUserCase(user.session_token);
    
            if(!respose.success) return dispatch({ type: 'not-authenticated' });
    
            if(respose.expired) await RemoveUserUseCase();
    
            return dispatch({type: 'auth', payload: { user } })

        } catch (error) {
            
            dispatch({ type: 'not-authenticated' });
            
        }


    }

    const auth =  async (user:User) => {
        dispatch({ 
            type: 'auth', 
            payload: { user }
        });
    
    }

    const logout = () => {
        dispatch({ type: 'logout' });
    }

    const updateUser = async (user: User) => {
        await SaveUserUseCase(user);

        dispatch({ 
            type: 'update-user', 
            payload: { user }
        });

    }

    

    return (
        <AuthContext.Provider 
            value={{
                ...state,
                auth,
                logout,
                checkToken,
                updateUser
            }}
        >
            { children }
        </AuthContext.Provider>
    )

}

