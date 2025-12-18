import { createContext, useReducer } from "react";
import { productReducer } from "./productReducer";

export const ProductContext = createContext();
const initialState = {
    products: []
}
export const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, initialState)

    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductContext.Provider>
    )
}