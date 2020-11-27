import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getCurrentUserService } from "@store/auth/services";

import Routes from "./routes";
import "./App.css";

function App(props) {
    const dispatch = useDispatch()
    const [isAuthenticated, userHasAuthenticated] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(true);
    

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

    return (
        <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
    );
}

export default withRouter(App);
