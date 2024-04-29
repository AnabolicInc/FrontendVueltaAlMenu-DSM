import { User } from "../../../Domain/entities/User";


export interface AuthState {
    user: User | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
}

export type AuthAction = 
    | { type:'auth',payload: {user:User} }
    | { type: 'not-authenticated', }
    | { type: 'logout', }
    | { type: 'update-user', payload: {user:User} }


export const authReducer =(state:AuthState,action: AuthAction) => {
    
    switch (action.type) {
        case 'auth':
            return{
                ...state,
                status: 'authenticated',
                user: action.payload.user
            }
        case 'logout':
            return{
                
            }
        case 'not-authenticated':
            return{
                status: 'not-authenticated',
                user: null
            }
        case 'update-user':
            return{
                ...state,
                status: 'authenticated',
                user: action.payload.user
            } 
    
        default:
            break;
    }

}