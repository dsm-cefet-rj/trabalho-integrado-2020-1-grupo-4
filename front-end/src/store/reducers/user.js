const INITIAL_STATE = {
    user:"",
}

export default function user(action, state = INITIAL_STATE) {
    switch(action.type){
        case 'USER_LOGIN':
        case 'USER_SIGN_UP':
        case 'CHANGE_PASSWORD':    
            return {
                ...state,
                user: action.payload.data,
            }

        default: 
            return state;
    }
}