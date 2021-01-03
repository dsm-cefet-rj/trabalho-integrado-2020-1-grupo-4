import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import AuthenticatedRoute from "./components/AuthenticatedRoute/AuthenticatedRoute.js";

import {Dashboard} from './containers/Dashboard';
import {Home} from './containers/Home';
import {Note} from './containers/Note';
import {NotFound} from './containers/NotFound';

export default function Routes(appProps){
    return (
            <BrowserRouter>
                <Switch>

                    <Route exact path='/'>
                        <Redirect to='/home' />
                    </Route>

                    <Route
                        path='/home'
                        component={Home}
                    />

                    <AuthenticatedRoute
                        path="/dashboard" exact
                        component={Dashboard}
                        appProps={appProps}
                    />

                    {/* <AuthenticatedRoute
                        path="/folder" exact
                        component={Folder}
                        appProps={appProps}
                    /> */}

                    {/* <AuthenticatedRoute
                        path="/form" exact
                        component={Form}
                        appProps={appProps}
                    /> */}


                    <AuthenticatedRoute
                        path="/note" exact
                        component={Note}
                        appProps={appProps}
                    />

                    <AuthenticatedRoute
                        path="/note/:id" exact
                        component={Note}
                        appProps={appProps}
                    />

                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
    )
}
