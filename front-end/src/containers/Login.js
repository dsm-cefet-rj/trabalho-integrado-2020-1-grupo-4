import React, { useState } from "react";
//import { Auth } from "aws-amplify";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { useFormFields } from "../libs/hooksLib";
import { Link } from "react-router-dom";
import "./Login.css";
import API from '../services/api'
import * as UserActions from '../store/actions/user';
import { connect } from 'react-redux';

function Login(props, {signInUser, user}) {   
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
        
        API.get(`/users?email=${fields.email}`)
        .then(Response =>{
            props.userHasAuthenticated(true);
            signInUser(
                Response.data[0].id,
                Response.data[0].email,
                Response.data[0].password
            )
        })
        .catch((e) => {
            alert(e.message);
            setIsLoading(false);
        })
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={fields.email}
                        onChange={handleFieldChange}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        type="password"
                        value={fields.password}
                        onChange={handleFieldChange}
                    />
                </FormGroup>
                <LoaderButton
                    block
                    type="submit"
                    bsSize="large"
                    isLoading={isLoading}
                    disabled={!validateForm()}
                >
                    Entrar
                </LoaderButton>
                <Link to="/ResetPassword">Esqueceu a Senha?</Link>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    signInUser: (id, email, password) => dispatch(UserActions.signInUser(id, email, password))
  });

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);


// try {
//     await Auth.signIn(fields.email, fields.password);
//     props.userHasAuthenticated(true);
// } catch (e) {
//     alert(e.message);
//     setIsLoading(false);
// }
