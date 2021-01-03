import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ControlLabel, FormControl, FormGroup } from "react-bootstrap";

import LoaderButton from "../../../../components/LoaderButton/LoaderButton.jsx";
import { createUserService, loginUserService } from "../../../../store/auth/services";
import { useFormFields } from "../../../../libs/hooksLib";

import "./Signup.css";

export function Signup(props) {

    const dispatch = useDispatch()
    const [fields, handleFieldChange] = useFormFields({
        name: "",
        email: "",
        confirmEmail:"",
        password: "",
        confirmPassword: "",
        confirmationCode: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    function validateForm() {
        return (
            fields.name.length > 0 &&
            fields.email.length > 0 &&
            fields.email === fields.confirmEmail &&
            fields.password.length > 0 &&
            fields.password === fields.confirmPassword
        );
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        try {
            const newUser = {
                name: fields.name,
                username: fields.email,
                password: fields.password
            };
            await createUserService(dispatch, newUser);
            setIsLoading(false);
            props.history.push('/dashboard')
        } catch (e) {
            alert(e);
            setIsLoading(false);
        }
    }
    
    function renderForm() {
        return (
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="name" bsSize="large">
                    <ControlLabel>Nome</ControlLabel>
                    <FormControl
                        name="form_01"
                        autoFocus
                        type="name"
                        value={fields.name}
                        onChange={handleFieldChange}
                    />
                </FormGroup>
                <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        name="form_02"
                        autoFocus
                        type="email"
                        value={fields.email}
                        onChange={handleFieldChange}
                    />
                </FormGroup>
                <FormGroup controlId="confirmEmail" bsSize="large">
                    <ControlLabel>Email Confirmation</ControlLabel>
                    <FormControl
                        name="form_03"
                        autoFocus
                        type="email"
                        value={fields.confirmEmail}
                        onChange={handleFieldChange}
                    />
                </FormGroup>
                <FormGroup controlId="password"  bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        name="form_04"
                        type="password"
                        value={fields.password}
                        onChange={handleFieldChange}
                    />
                </FormGroup>
                <FormGroup controlId="confirmPassword" bsSize="large">
                    <ControlLabel>Confirm Password</ControlLabel>
                    <FormControl
                        name="form_05"
                        type="password"
                        onChange={handleFieldChange}
                        value={fields.confirmPassword}
                    />
                </FormGroup>
                
                <LoaderButton
                    id="botao_04"
                    block
                    type="submit"
                    bsSize="large"
                    isLoading={isLoading}
                    disabled={!validateForm()}
                >
                    Signup
                </LoaderButton>
            </form>
        );
    }

    return (
        <div className="Signup">
            {renderForm()}
        </div>
    );
}