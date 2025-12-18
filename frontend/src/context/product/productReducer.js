export const productReducer = (state, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return { products: action.payload }
        default:
            return state;
    }
}