import React from "react";
import { Switch } from "react-router-dom";

import { Login, Signup, Welcome } from "./";
import UnauthenticatedRoute from "@components/UnauthenticatedRoute/UnauthenticatedRoute.js";
import "./Home.css";
import GoBackButton from "@components/GoBackButton/GoBackButton.jsx";

export function Home(props) {
    
    const userProps = {
        isAuthenticated: props.isAuthenticated, 
        userHasAuthenticated: props.userHasAuthenticated
    }
    
    return (
        <>
            <GoBackButton props={props}/>
            <div className="home" id="home">
                <div className="title" id="home-title">
                    <h1> Scratch </h1>
                </div>

                <Switch>
                    <UnauthenticatedRoute path="/home" exact component={Welcome} appProps={userProps} />
                    <UnauthenticatedRoute path="/home/login" exact component={Login} appProps={userProps} />
                    <UnauthenticatedRoute path="/home/signup" exact component={Signup} appProps={userProps} />
                </Switch>
            </div>
        </>

    );
}
