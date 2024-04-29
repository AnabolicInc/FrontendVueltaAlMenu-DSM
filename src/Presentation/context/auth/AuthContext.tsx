import { createContext, useContext, useReducer, useState } from 'react';
import { User } from '../../../Domain/entities/User';
import { authReducer } from './AuthReducer';


type AuthContextProps = {

    user: User | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    
}

const authInitialState: AuthContextProps = {
    status: 'checking',
    user: null,
};

export const AuthContext = createContext({} as AuthContextProps);

export const  AuthProvider = ({ children }: any) => {
    
    const [state,dipatch] = useReducer(authReducer, authInitialState);


    return (
        <AuthContext.Provider 
            value={{
                user: null,
                status: 'checking',
            }}
        >
            { children }
        </AuthContext.Provider>
    )

}

