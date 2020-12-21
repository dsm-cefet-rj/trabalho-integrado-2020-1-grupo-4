import React from "react";
import { Button } from 'react-bootstrap';

import "./Welcome.css";

export const Welcome = (props) => {
    return(
        <>
            <div className="description" id="home-description">
                <h5>Uma aplicação para te ajudar a organizar suas anotações!</h5>
            </div>

            <div className="actions" id="home-actions">
                <Button className="btn-primary" href={"/home/login"} id="botao_01" size="lg"> Login </Button>
                <Button href={"/home/signup"} id="botao_02"> Sign up </Button>
            </div>
        </>
    )
}