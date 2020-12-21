import { v4 as uuid } from 'uuid'
import {hashSync, compareSync} from 'bcryptjs'
import { AUTH_REDUCER_LOGOUT, AUTH_REDUCER_SET_USER } from "./reducer";
import { api } from "../../api";

export const getCurrentUserService = async (dispatch) => {
  const user_id = localStorage.getItem('user_id')
  if(user_id) {
    const {data: user} = await api.get(`/users/${user_id}`)
    dispatch({type: AUTH_REDUCER_SET_USER, payload: user})
    return user
  }
}

export const createUserService = async(dispatch, user) => {
    await api
    .post('/api/user/signup', user)
    .then(
        (response) => {
            dispatch({
                type: AUTH_REDUCER_SET_USER,
                payload: {user: response.data},
            });
            
            return Promise.resolve(response.data);
        },
        (error) => {
            const message = 
            (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();

            return Promise.reject(error);
        }
    );
}


export const loginUserService = async(dispatch, {email, password}) => {
    await api.post('/api/user/login', {username: email, password})
    .then(
        (response) => {
            console.log(response.data)
            dispatch({
            type: AUTH_REDUCER_SET_USER,
            payload: { user: response.data},
            })

        return Promise.resolve(response.data.token);
        },
        (error) => {
            const message = 
            (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();

        return Promise.reject(error);
        }
    );
}