export function signInUser(id, email, password){
    console.log("cheguei aqui")
    return{
        type: 'USER_LOGIN',
        payload: {
            id,
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
            email,
            password
        }
    }
}

