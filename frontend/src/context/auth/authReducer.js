export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return { user: action.payload, isAuth: true };
        case "LOGOUT":
            return { user: null, isAuth: false };
        default: 
        return state;
    }
}