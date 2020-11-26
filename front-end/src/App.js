import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { useDispatch } from "react-redux";
import { getCurrentUserService } from "@store/auth/services";
import { AUTH_REDUCER_LOGOUT } from "@store/auth/reducer";

import Routes from "./routes";
import "./App.css";

function App(props) {
    const dispatch = useDispatch()
    const [isAuthenticated, userHasAuthenticated] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(true);
    
    //botao esquerdo superior para voltar 
    const { location, history } = props;
    const initialPages = ['/home', '/dashboard']

    useEffect( () => {
        async function onLoad() {
            try {
                const user = await getCurrentUserService(dispatch)
                if(user) userHasAuthenticated(true);
            }
            catch(e) {
                if (e !== 'No current user') {
                    alert(e);
                }
            }
    
            setIsAuthenticating(false);
        }
        onLoad();
    }, [dispatch]);

    async function handleLogout() {
        dispatch({type: AUTH_REDUCER_LOGOUT})
        userHasAuthenticated(false);

        props.history.push("/login");
    }

    return (
        <>
            {!initialPages.includes(location.pathname) && (
                <button className="goback" id="botao_03" onClick={history.goBack}>
                    <i className="fas fa-chevron-left"></i>
                </button>
            )}
            <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
        </>
    );
}

export default withRouter(App);
