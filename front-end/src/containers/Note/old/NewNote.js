import React, { useRef, useState } from "react";
import { ControlLabel, FormControl, FormGroup } from "react-bootstrap";
import { v4 as uuid } from 'uuid'
import LoaderButton from "../components/LoaderButton";
import config from "../config";
import "./NewNote.css";
//import { s3Upload } from "../libs/awsLib";
import { api } from "../api";
import { useSelector } from "react-redux";
import { AuthUserSelector } from "../store/auth/selectors";

export default function NewNote(props) {
    const file = useRef(null);
    const [content, setContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const user = useSelector(AuthUserSelector)

    function validateForm() {
        return content.length > 0;
    }

    function handleFileChange(event) {
        file.current = event.target.files[0];
    }

    async function handleSubmit(event) {
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
            const attachment = file.current
                ? null//(NO FILES IN MOCKUP) await s3Upload(file.current)
                : null;

            await createNote({ content, attachment });
            props.history.push("/");
        } catch (e) {
            alert(e);
            setIsLoading(false);
        }
    }

    function createNote(note) {
        return api.post("/notes", {
          ...note,
          userid: user.id,
          id: uuid(),
          createdAt: Date.now()
        });
    }

    return (
        <div className="NewNote">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="content">
                    <FormControl
                        value={content}
                        componentClass="textarea"
                        onChange={e => setContent(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="file">
                    <ControlLabel>Attachment</ControlLabel>
                    <FormControl onChange={handleFileChange} type="file" />
                </FormGroup>
                <LoaderButton
                    block
                    type="submit"
                    bsSize="large"
                    bsStyle="primary"
                    isLoading={isLoading}
                    disabled={!validateForm()}
                    data-testid="testaCreate"
                >
                    Create
                </LoaderButton>
            </form>
        </div>
    );
}
