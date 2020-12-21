import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function AuthenticatedRoute({ component: C, appProps, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                localStorage.getItem('userToken') !== null || localStorage.getItem('user') !== undefined
                    ? <C {...props} {...appProps} />
                    : <Redirect
                        to={'/home'}
                    />}
        />
    );
}