import React from "react";
import { Button } from 'react-bootstrap';

export const Welcome = (props) => {
    return(
        <>
            <div className="description" id="home-description">
                <h5> Description. Idk what to place here.</h5>
            </div>

            <div className="actions" id="home-actions">
                <Button className="btn-primary" href={"/login"} id="home-login-button" size="lg"> Login </Button>
                <Button className="btn-secondary" href={"/signup"} id="home-signup-button"> Sign up </Button>
            </div>
        </>
    )
} 