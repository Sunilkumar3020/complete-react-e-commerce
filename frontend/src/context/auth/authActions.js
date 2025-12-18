import api from "../../api/axios";

//user register

export const registerUser = async (dispatch, data) => {
    const res = await api.post('/auth/register', data);
    localStorage.setItem('token', res.data.token);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
}


// user login
export const loginUser = async (dispatch, credentials) => {
    const res = await api.post('/auth/login', credentials);
    localStorage.setItem('token', res.data.token);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
}


// user logout
export const logoutUser = dispatch => {
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
}