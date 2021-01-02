import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { useFormFields } from "../../../../libs/hooksLib";

import './NewNote.css'
import { sendNoteService } from "../../../../store/notes/services";
import {ControlLabel, FormControl, FormGroup} from "react-bootstrap";

export function NewNote(props) {

    const dispatch = useDispatch()
    const [fields, handleFieldChange] = useFormFields({
        noteName: "",
        contents: "",
        attachments_name: "",
        attachment: "",
        owner_id: localStorage.getItem('UserID'),
        date: Date()
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
            console.log('oi new note')
            sendNoteService(dispatch, fields);
            setIsLoading(false);
            props.history.push('/dashboard')
        } catch (e) {
            alert(e);
            setIsLoading(false);
        }
    }

    function renderForm() {
        return(
            <body>
                <form onSubmit={handleSubmit}>
                    <FormGroup controlId="noteName" bsSize="large">
                        <ControlLabel>Nome Nota</ControlLabel>
                        <FormControl
                            name="name_01"
                            autoFocus
                            type="noteName"
                            value={fields.noteName}
                            onChange={handleFieldChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="contents" bsSize="large">
                        <ControlLabel>Mensagem Nota</ControlLabel>
                        <FormControl
                            name="name_02"
                            type="contents"
                            value={fields.contents}
                            onChange={handleFieldChange}
                        />
                    </FormGroup>
                        <loaderButton 
                        className="botao submit" 
                        type="submit" 
                        name="submit"
                        isLoading={isLoading}
                        disabled={!validateForm()}
                        >
                        Salvar
                        </loaderButton>
                </form>
                <br/><br/>
                <button className="botao2" onClick={() => props.history.push('/dashboard')}>Cancelar</button>
            </body>
        );
    }

    return (
        <div className="NewNotes">
            {renderForm()}
        </div>
    );
}