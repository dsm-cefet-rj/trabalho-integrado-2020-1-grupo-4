import React, { useEffect, useRef, useState } from "react";
import { ControlLabel, FormControl, FormGroup } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import config from "./../config";
import "./Notes.css";
//import { s3Upload } from "../libs/awsLib";
import { api } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { getNoteWithS3Service } from "../store/notes/services";
import { NoteSelector } from "../store/notes/selectors";
import { NOTES_REDUCER_SET_NOTE_WITH_S3 } from "../store/notes/reducer";

export default function Notes(props) {
    const dispatch = useDispatch()
    const file = useRef(null);
    const [content, setContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const note = useSelector(NoteSelector)

    useEffect(() => {
      getNoteWithS3Service(dispatch, props.match.params.id)
        .catch(alert)

      return () => {
        dispatch({type: NOTES_REDUCER_SET_NOTE_WITH_S3, payload: null})
      }
    }, [props.match.params.id]);

    useEffect(() => {
      if(note) {
        const {content} = note;
        setContent(content);
      }


    }, [note])

    function validateForm() {
        return content.length > 0;
    }

    function formatFilename(str) {
        return str.replace(/^\w+-/, "");
    }

    function handleFileChange(event) {
        file.current = event.target.files[0];
    }

    function saveNote(data) {
        return api.patch(`/notes/${note.id}`, data);
    }

    async function handleSubmit(event) {
        let attachment;

        event.preventDefault();

        if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
            alert(
                `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
                1000000} MB.`
            );
            return;
        }

        setIsLoading(true);

        try {
            if (file.current) {
                attachment = null //(NO FILE IN MOCKUP)await s3Upload(file.current);
            }

            await saveNote({
                content,
                attachment: attachment || note.attachment
            });
            props.history.push("/");
        } catch (e) {
            alert(e);
            setIsLoading(false);
        }
    }

    function deleteNote() {
        return api.delete(`/notes/${note.id}`);
    }

    async function handleDelete(event) {
        event.preventDefault();

        const confirmed = window.confirm(
            "Are you sure you want to delete this note?"
        );

        if (!confirmed) {
            return;
        }

        setIsDeleting(true);

        try {
            await deleteNote();
            props.history.push("/");
        } catch (e) {
            alert(e);
            setIsDeleting(false);
        }
    }

    return (
        <div className="Notes">
            {note && (
                <form onSubmit={handleSubmit}>
                    <FormGroup controlId="content">
                        <FormControl
                            value={content}
                            componentClass="textarea"
                            onChange={e => setContent(e.target.value)}
                        />
                    </FormGroup>
                    {note.attachment && (
                        <FormGroup>
                            <ControlLabel>Attachment</ControlLabel>
                            <FormControl.Static>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={note.attachmentURL}
                                >
                                    {formatFilename(note.attachment)}
                                </a>
                            </FormControl.Static>
                        </FormGroup>
                    )}
                    <FormGroup controlId="file">
                        {!note.attachment && <ControlLabel>Attachment</ControlLabel>}
                        <FormControl onChange={handleFileChange} type="file" />
                    </FormGroup>
                    <LoaderButton
                        block
                        type="submit"
                        bsSize="large"
                        bsStyle="primary"
                        isLoading={isLoading}
                        disabled={!validateForm()}
                        data-testid="testaSalvar"
                    >
                        Save
                    </LoaderButton>
                    <LoaderButton
                        block
                        bsSize="large"
                        bsStyle="danger"
                        onClick={handleDelete}
                        isLoading={isDeleting}
                        data-testid="testaDeletar"
                    >
                        Delete
                    </LoaderButton>
                </form>
            )}
        </div>
    );
}
