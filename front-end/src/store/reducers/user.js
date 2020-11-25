const INITIAL_STATE = {
    id: "",
    email: "",
    password: ""
}

export default function user(state = INITIAL_STATE, action) {
    switch(action.type){
        case 'USER_LOGIN':
            console.log("fiz login")
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                password: action.payload.password
            }

        case 'USER_SIGN_UP':
            console.log("nao grita cmg")    
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                password: action.payload.password
            }
        
        case 'CHANGE_PASSWORD':
            console.log("nao grita cmg2")
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                password: action.payload.password
            }

        default: 
            return state;
    }
}