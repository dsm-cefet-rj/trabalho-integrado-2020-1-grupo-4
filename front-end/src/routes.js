import Home from "./containers/Home";
import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";
import ResetPassword from "./containers/ResetPassword";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default function Routes({ appProps }) {
    return (
        <Switch>
            <AppliedRoute path="/" exact component={Home} appProps={appProps} />
            <UnauthenticatedRoute path="/login" exact component={Login} appProps={appProps} />
            <UnauthenticatedRoute path="/signup" exact component={Signup} appProps={appProps} />
            <AuthenticatedRoute path="/notes/new" exact component={NewNote} appProps={appProps} />
            <AuthenticatedRoute path="/notes/:id" exact component={Notes} appProps={appProps} />
            <UnauthenticatedRoute
                path="/login/reset"
                exact
                component={ResetPassword}
                props={appProps}
            />
            { /* Finally, catch all unmatched routes */ }
            <Route component={NotFound} />
        </Switch>
    );
}
