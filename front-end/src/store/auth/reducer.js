import { normalizeAuthUser } from "./normalizers";

export const AUTH_REDUCER_SET_USER = 'AUTH_REDUCER_SET_USER'
export const AUTH_REDUCER_LOGOUT = 'AUTH_REDUCER_LOGOUT'

const INITIAL_STATE = {
  user: null,
};


export const authReducer = (action, state = INITIAL_STATE) => {
  if (action) {
    switch (action.type) {
      case AUTH_REDUCER_SET_USER:
      console.log(action.payload)  
      return {
          ...state, 
          user: normalizeAuthUser(action.payload),
        };
      case AUTH_REDUCER_LOGOUT:
        localStorage.removeItem('user')
        return {
          ...state, 
          user: null
        }
  
      default: return state;
  
    }
  }
  return state;
};

