import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

export const AuthContext = createContext();

const initialState = {
    user: null,
    isAuth: !!localStorage.getItem('token')
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState)
    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}