import React from "react";
import { Switch, Route } from "react-router-dom";

import { Login, Signup, Welcome } from "./";
import UnauthenticatedRoute from "@components/UnauthenticatedRoute";
import "./Home.css";

export function Home(props) {
    const userProps = {
        isAuthenticated: props.isAuthenticated, 
        userHasAuthenticated: props.userHasAuthenticated
    }

    return (
        <>
            <div className="home" id="home">
                <div className="title" id="home-title">
                    <h1> Scratch </h1>
                </div>

                <Switch>
                    <UnauthenticatedRoute path="/home" exact component={Welcome} appProps={userProps} />
                    <UnauthenticatedRoute path="/home/login" exact component={Login} appProps={userProps} />
                    <UnauthenticatedRoute path="/home/signup" exact component={Signup} appProps={userProps} />
                </Switch>

                {/* <Switch>
                    <Route exact path={"/"} render={(props) => <Login {...props} {...userProps} /> }   />
                    <Route path={"/login"}  render={(props) => <Login {...props} {...userProps} /> }   />
                    <Route path={"/signup"} render={(props) => <Signup {...props} {...userProps} />}   />
                </Switch> */}
            </div>
        </>

    );
}
