import React from "react";
import { useDispatch } from "react-redux";
import { AUTH_REDUCER_LOGOUT } from "../../store/auth/reducer";

import './LogOutButton.css'

export default function LogOutButton ({props}) {
    const dispatch = useDispatch()
    async function handleLogout() {
        dispatch({type: AUTH_REDUCER_LOGOUT})
        localStorage.removeItem('userID')
        localStorage.removeItem('userToken')
        props.history.push('/')
    }

    return(
        <button className="logout" id="botao_08" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i>
        </button>
    )
}

