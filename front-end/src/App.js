import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./App.css";
import Routes from "./routes";
//import { Auth } from "aws-amplify";

function App(props) {

    const [isAuthenticated, userHasAuthenticated] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(true);

    useEffect(() => {
        onLoad();
    }, []);

    async function onLoad() {
        try {
            //await Auth.currentSession();
            userHasAuthenticated(true);
        }
        catch(e) {
            if (e !== 'No current user') {
                alert(e);
            }
        }

        setIsAuthenticating(false);
    }

    async function handleLogout() {
        //await Auth.signOut();

        userHasAuthenticated(false);

        props.history.push("/Login");
    }

    return (
        !isAuthenticating &&
        <div className="App container">
            <Navbar fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Scratch</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        {isAuthenticated
                            ? <NavItem onClick={handleLogout}>Sair</NavItem>
                            : <>
                                <LinkContainer to="/signup">
                                    <NavItem>Cadastrar</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/login">
                                    <NavItem>Entrar</NavItem>
                                </LinkContainer>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
        </div>
    );
}

export default withRouter(App);