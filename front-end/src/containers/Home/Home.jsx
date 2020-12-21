import React from "react";
import { Switch } from "react-router-dom";

import { Login, Signup, Welcome } from "./";
import UnauthenticatedRoute from "../../components/UnauthenticatedRoute/UnauthenticatedRoute.js";
import "./Home.css";
import GoBackButton from "../../components/GoBackButton/GoBackButton.jsx";

export function Home(props) {
    return (
        <>
            <GoBackButton props={props}/>
            <div className="home" id="home">
                <div className="title" id="home-title">
                    <h1> Scratch </h1>
                </div>

                <Switch>
                    <UnauthenticatedRoute path="/home" exact component={Welcome} />
                    <UnauthenticatedRoute path="/home/login" exact component={Login} />
                    <UnauthenticatedRoute path="/home/signup" exact component={Signup} />
                </Switch>
            </div>
        </>

    );
}
