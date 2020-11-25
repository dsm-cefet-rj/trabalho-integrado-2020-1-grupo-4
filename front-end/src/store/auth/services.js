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
  const user_data = {
    ...user,
    password: hashSync(user.password, process.env.SALT || 10),
    id:  uuid()
  }

  await api.post('users', user_data)
  dispatch({type: AUTH_REDUCER_SET_USER, payload: user_data})

  return user_data
}


export const loginUserService = async(dispatch, {email, password}) => {
  const {data: [user]} = await api.get('users', {params: {email}})
  if(user) {
    if(compareSync(password, user.password)) {
      dispatch({type: AUTH_REDUCER_SET_USER, payload: user})
      return user
    }
  }
  dispatch({type: AUTH_REDUCER_LOGOUT})
  throw new Error('Invalid auth data provided')
}
