import React, { useEffect, useRef, UseState} from "react";

import { useDispatch } from "react-redux";

import { useFormFields } from "../../../../libs/hooksLib";

import './NewNote.css'
import {initialize} from "jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit";
import {createUserService} from "../../../../store/auth/services";
import {ControlLabel, FormControl, FormGroup} from "react-bootstrap";

export function NewNote(props) {

    const dispatch = useDispatch()
    const [fields, handleFieldChange] = useFormFields({
        noteName: "",
        contents: "",
        attachments_name: "",
        attachment: "",
        owner_id: localStorage.getItem('UserID'),
    });

    const [isLoading, setIsLoading] = useState(false);

    function validateForm() {
        return (
            fields.noteName.lenght > 0 &&
            fields.contents.lenght > 0
        );
    };

    async function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        try {
            const newUser = {
                name: fields.name,
                username: fields.email,
                password: fields.password
            };
            createUserService(dispatch, newUser);
            setIsLoading(false);
            props.history.push('/dashboard')
        } catch (e) {
            alert(e);
            setIsLoading(false);
        }
    }

    function renderForm() {
        return (
            <body>
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="name" bsSize="large">
                    <ControlLabel>Nome Nota</ControlLabel>
                    <FormControl
                        name="form_01"
                        autoFocus
                        type="name"
                        value={fields.name}
                        onChange={handleFieldChange}
                    />
                </FormGroup>

                <FormGroup controlId="contents" bsSize="large">
                    <ControlLabel>Mensagem Nota</ControlLabel>
                    <FormControl
                        name="form_01"
                        autoFocus
                        type="contents"
                        value={fields.contents}
                        onChange={handleFieldChange}
                    />
                </FormGroup>


                <div className='botaosalvarecancelar'>
                    <loaderButton className="botao submit" type="submit" name="submit">Salvar</loaderButton>
                    <br/><br/>
                    <button className="botao2" onClick={() => props.history.push('/dashboard')}>Cancelar</button>
                </div>


            </form>

            </body>
        );
    }

    return (
        <div className="NewNotes">
            {renderForm()}
        </div>
    );
}