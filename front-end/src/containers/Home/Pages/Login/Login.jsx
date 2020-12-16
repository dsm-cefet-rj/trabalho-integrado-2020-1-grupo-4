import React, { useState } from "react";
import { ControlLabel, FormControl, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { loginUserService } from "../../../../store/auth/services";

import LoaderButton from "../../../../components/LoaderButton/LoaderButton.jsx";
import { useFormFields } from "../../../../libs/hooksLib";

import "./Login.css";

export function Login(props) {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false);
    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: ""
    });

    function validateForm() {
        return fields.email.length > 0 && fields.password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        setIsLoading(true);

        try {
            const user = await loginUserService(dispatch, fields);
            localStorage.setItem('user_id', user.id)
            props.userHasAuthenticated(true);
        } catch (e) {
            alert(e.message);
            setIsLoading(false);
        }
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup id="email" controlId="form_06" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={fields.email}
                        onChange={handleFieldChange}
                    />
                </FormGroup>
                <FormGroup id="password" controlId="form_07" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        type="password"
                        value={fields.password}
                        onChange={handleFieldChange}
                    />
                </FormGroup>
                <LoaderButton
                    id="botao_07"
                    block
                    type="submit"
                    bsSize="large"
                    isLoading={isLoading}
                    disabled={!validateForm()}
                >
                    Login
                </LoaderButton>
                <Link to="/login/reset">Forgot password?</Link>
            </form>
        </div>
    );
}