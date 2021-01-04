import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function AuthenticatedRoute({ component: C, appProps, ...rest }) {
    const check = localStorage.getItem('userToken') !== null && localStorage.getItem('userID') !== null
    return (
        <Route
            {...rest}
            render={props =>
                check
                    ? <C {...props} {...appProps} />
                    : <Redirect
                        to={'/home'}
                    />}
        />
    );
}