import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./App.css";
import Routes from "./routes";
import { connect } from 'react-redux';
//import { Auth } from "aws-amplify";


import Signup from "./containers/Signup";
import Login from "./containers/Login";

function App(props, {signInUser, user}) {
    const [isAuthenticated, userHasAuthenticated] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(true);

    useEffect(() => {
        onLoad();
    }, []);

    //Feio
    async function onLoad() {
        if(user?.id === ""){
            userHasAuthenticated(true);
        } else {
            //alert('No current user');
            setIsAuthenticating(false);
        }  
    }

    async function handleLogout() {
        signInUser(
            null,
            null,
            null
        );
        
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
                                <Link to="/Signup">
                                    <NavItem>Cadastrar</NavItem>
                                </Link>
                                <Link to="/Login">
                                    <NavItem>Entrar</NavItem>
                                </Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
        </div>
    );
}

//export default withRouter(App);

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(App);


// async function handleLogout() {
//     //await Auth.signOut();

//     userHasAuthenticated(false);

//     props.history.push("/Login");
// }

    // async function onLoad() {
    //     API.get(`/profile?email=${fields.email}&password${fields.senha}`)
    //     .then(Response =>{
    //         props.userHasAuthenticated(true);
    //         signInUser(
    //             Response.data[0].id,
    //             Response.data[0].email,
    //             Response.data[0].password
    //         )
    //     })
    //     .catch((e) => {
    //         alert(e.message);
    //         setIsLoading(false);
    //     })
    //     setIsAuthenticating(false)
    // }


    
    // async function onLoad() {
    //     try {
    //         await Auth.currentSession();
    //         userHasAuthenticated(true);
    //     }
    //     catch(e) {
    //         if (e !== 'No current user') {
    //             alert(e);
    //         }
    //     }

    //     setIsAuthenticating(false);
    // }