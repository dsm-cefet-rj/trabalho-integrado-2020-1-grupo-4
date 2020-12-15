import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";



import { Home } from '@containers/Home';

import { Dashboard } from '@containers/Dashboard';

import { NotFound } from '@containers/NotFound'

import AppliedRoute from "@components/AppliedRoute/AppliedRoute.js";
import AuthenticatedRoute from "@components/AuthenticatedRoute/AuthenticatedRoute.js";

import { Alert } from '@components/Alert/Alert.jsx';

export default function Routes({ appProps }) {
    return (
        <>
            <Alert />

                <BrowserRouter>
                    <Switch>
                        
                        <Route exact path="/">
                            <Redirect to='/home' />
                        </Route>

                        <AppliedRoute
                            path="/home" 
                            component={Home} 
                            appProps={appProps} 
                        />

                        <AuthenticatedRoute 
                            path="/dashboard" exact 
                            component={Dashboard} 
                            appProps={appProps} 
                        />
                        {/* <AuthenticatedRoute path="/notes/new" exact component={NewNote} appProps={appProps} />
                        <AuthenticatedRoute path="/notes/:id" exact component={Notes} appProps={appProps} /> */}
                        { /* Finally, catch all unmatched routes */ }
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
        </>
    );
}
