import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import ResetPassword from "./containers/ResetPassword";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";


import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";


export default function Routes({ appProps }) {
    return (
        <BrowserRouter>
            <Switch>
                <AppliedRoute path="/" exact component={Home} appProps={appProps} />
                <Route path="/login" exact component={Login} appProps={appProps} />
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
        </BrowserRouter>
    );
}