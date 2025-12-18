import api from "../../api/axios";
export const fetchProducts = async dispatch => {
    const res = await api.get('/products');
    dispatch({ type: 'SET_PRODUCTS', payload: res.data })
};

export const addProduct = async (dispatch, product) => {
    await api.post('/products', product);
    fetchProducts(dispatch)
}