import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch } from "react-redux";

import { getCurrentUserService } from "./store/auth/services";
import { AUTH_REDUCER_LOGOUT } from "./store/auth/reducer";

import "./App.css";
import Routes from "./routes";


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

    async function handleLogout() {
        dispatch({type: AUTH_REDUCER_LOGOUT})
        userHasAuthenticated(false);

        props.history.push("/login");
    }

    return (
        <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
    );
}

// return (
//     !isAuthenticating &&
//     <div className="App container">
//         <Navbar fluid collapseOnSelect>
//             <Navbar.Header>
//                 <Navbar.Brand>
//                     <Link to="/">Scratch</Link>
//                 </Navbar.Brand>
//                 <Navbar.Toggle />
//             </Navbar.Header>
//             <Navbar.Collapse>
//                 <Nav pullRight>
//                     {isAuthenticated
//                         ? <NavItem onClick={handleLogout}>Logout</NavItem>
//                         : <>
//                             <LinkContainer to="/signup">
//                                 <NavItem>Signup</NavItem>
//                             </LinkContainer>
//                             <LinkContainer to="/login">
//                                 <NavItem>Login</NavItem>
//                             </LinkContainer>
//                         </>
//                     }
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//         <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
//     </div>
// );


export default withRouter(App);
