import React, {useEffect, useRef, useState} from "react";

import {useDispatch, useSelector} from "react-redux";

import {useFormFields} from "../../../../libs/hooksLib";

import './NewNote.css'
import {deleteNoteService, getNoteService, sendNoteService} from "../../../../store/notes/services";
import {Button, ControlLabel, FormControl, FormGroup, ListGroupItem} from "react-bootstrap";
import LoaderButton from "../../../../components/LoaderButton/LoaderButton";
import {useParams} from 'react-router-dom'
import {NoteSelector} from "../../../../store/notes/selectors";

export function NewNote(props) {
    const uploadRef = useRef()
    const {id} = useParams()
    const dispatch = useDispatch()
    const note = useSelector(NoteSelector(id))
    const [fields, handleFieldChange, setFields] = useFormFields({
        noteName: "",
        contents: "",
        attachments: [],
        owner_id: localStorage.getItem('userID'),
        date: Date()
    }, useState);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const init = async () => {
            if(id?.length){
                try {
                    await getNoteService(dispatch, id)
                }catch (e){
                    props.history.push('/dashboard')
                }
            }
            setIsLoading(false)
        }
        init()
    }, [dispatch, id])

    useEffect(() => {
        if(note){
            setFields(note)
        }
    }, [note])

    function validateForm() {
        return (
            fields.noteName.length > 0 &&
            fields.contents.length > 0
        );
    };

    async function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        try {
            const {_id, ...request} = fields
            await sendNoteService(dispatch, request, _id);
            setIsLoading(false);
            props.history.push('/dashboard')
        } catch (e) {
            alert(e);
            setIsLoading(false);
        }
    }

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const makeAttachment = async (file) => ({
        name: file.name,
        base64: await toBase64(file),
    })

    const uploadOnChange = async () => {
        const files = uploadRef.current.files
        const attachments = []
        for (const file of files){
            attachments.push(await makeAttachment(file))
        }

        handleFieldChange({
            target: {
                id: 'attachments',
                value: [...fields.attachments, ...attachments],
            }
        })
    }

    const removeAttachment = (index) => {
        handleFieldChange({
            target: {
                id: 'attachments',
                value: fields
                    .attachments
                    .filter((_, i) => i !== index)
            }
        })
    }

    const openAttachment = (attachment) => {
        window.open(attachment.base64, "_blank")
    }


    const removeNote = async (note) => {
        // eslint-disable-next-line no-restricted-globals
        if(confirm("Do you really want to delete it?")) {
            await deleteNoteService(dispatch, note)
            props.history.push("/dashboard")
        }
    }

    const renderForm = () => {
        return(
            <main>
                <h1>{id ? `Note - ${note?.noteName}` : 'New note'}</h1>
                <form onSubmit={handleSubmit}>
                    <FormGroup controlId="noteName" bsSize="large">
                        <ControlLabel>Note name</ControlLabel>
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
                            componentClass="textarea"
                            rows={10}
                        />
                    </FormGroup>
                    <FormGroup controlId="attachment" bsSize="large">
                        <Button type="button" htmlFor="upload" componentClass="label">
                            <input type="file" multiple style={{display: "none"}} id="upload" ref={uploadRef} onChange={uploadOnChange}/>
                            Upload attachment
                        </Button>
                    </FormGroup>
                    <ul>
                        {fields.attachments.map(
                            (attachment, i) => <ListGroupItem>
                                <h4>
                                    <a href="javascript:void(0)" onClick={() => openAttachment(attachment)} target="_blank">{attachment.name}</a>
                                    <b
                                    onClick={() => removeAttachment(i)}
                                    className="pull-right text-danger"
                                    style={{cursor: "pointer", fontSize: "24px"}}>&times;</b>
                                </h4>
                            </ListGroupItem>
                        )}
                    </ul>

                </form>
                <div style={{display: 'flex', justifyContent: "flex-end"}}>
                    <LoaderButton
                        className="botao submit"
                        type="submit"
                        name="submit"
                        isLoading={isLoading}
                        disabled={!validateForm()}
                        onClick={handleSubmit}
                    >
                        Save
                    </LoaderButton>
                </div>
                <br/><br/>
                <div style={{display: 'flex', justifyContent: "space-between"}}>
                    {note ? <Button
                        type="button" className="btn-danger btn-sm"
                        onClick={() => removeNote(note)}>
                        Delete
                    </Button>: null}

                    <button style={{marginLeft: "auto"}} className="botao2" onClick={() => props.history.push('/dashboard')}>
                        Cancelar
                    </button>
                </div>

            </main>
        );
    }

    return (
        <div className="NewNotes">
            {renderForm()}
        </div>
    );
}
