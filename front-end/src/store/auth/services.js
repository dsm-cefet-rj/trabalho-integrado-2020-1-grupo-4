import { AUTH_REDUCER_SET_USER } from "./reducer";
import { api } from "../../api";

export const loginUserService = async(dispatch, {email, password}) => {
    return await api
    .post('/api/user/login', {username: email, password})
    .then(
        (response) => {
            dispatch({
            type: AUTH_REDUCER_SET_USER,
            payload: { user: {token: response.data.token, _id: response.data._id}},
            })
            localStorage.setItem('userToken', response.data.token);
            localStorage.setItem('userID', response.data._id);
            return Promise.resolve(response.data.token);
        },
        (error) => {
            const message = 
            (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();

            return Promise.reject(message);
        }
    );
}

export const createUserService = async(dispatch, user) => {
    try{
        const response = await api.post('/api/user/signup', user)
        const login = {
            'email': user.username,
            'password': user.password
        }

        await loginUserService(dispatch, login)
        return Promise.resolve(response.data)
    }catch (error){
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        return Promise.reject(message)
    }
}