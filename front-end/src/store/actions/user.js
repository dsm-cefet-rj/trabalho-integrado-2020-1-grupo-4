export function signInUser(id, email, password){
    return{
        type: 'USER_LOGIN',
        payload: {
            id,
            name,
            email,
            password
        }
    }
}

export function signUpUser(id, email, password){
    return{
        type: 'USER_SIGN_UP',
        payload: {
            id,
            name,
            email,
            password
        }
    }
}

export function changePasswordUser(id, email, password){
    return{
        type: 'CHANGE_PASSWORD',
        payload: {
            id,
            name,
            email,
            password
        }
    }
}

