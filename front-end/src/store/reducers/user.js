const INITIAL_STATE = {
    id: "",
    name:"",
    email: "",
    password: ""
}

export default function user(action, state = INITIAL_STATE) {
    switch(action.type){
        case 'USER_LOGIN':
        case 'USER_SIGN_UP':
        case 'CHANGE_PASSWORD':    
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password
            }

        default: 
            return state;
    }
}