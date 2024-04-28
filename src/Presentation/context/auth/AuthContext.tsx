import { createContext, useContext, useState } from 'react';


type AuthContextProps = {

    user: any;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    
}

const AuthContext = createContext({} as AuthContextProps);

export const  AuthContextProvider = ({ children }: any) => {
    

    const user = 'user';
    const status = 'checking';


    return (
        <AuthContext.Provider value={{
            user,
            status,
        }}>
            { children }
        </AuthContext.Provider>
    )

}

