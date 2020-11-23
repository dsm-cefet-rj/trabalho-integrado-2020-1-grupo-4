import React, { useState, useEffect } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Home.css";
import { API } from "aws-amplify";
import { LinkContainer } from "react-router-bootstrap";

export default function Home(props) {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function onLoad() {
            if (!props.isAuthenticated) {
                return;
            }

            try {
                const notes = await loadNotes();
                setNotes(notes);
            } catch (e) {
                alert(e);
            }

            setIsLoading(false);
        }

        onLoad();
    }, [props.isAuthenticated]);

    function loadNotes() {
        return API.get("notes", "/notes");
    }

    function renderNotesList(notes) {
        return [{}].concat(notes).map((note, i) =>
            i !== 0 ? (
                <LinkContainer key={note.noteid} to={`/notes/${note.noteid}`}>
                    <ListGroupItem header={note.content.trim().split("\n")[0]}>
                        {"Created: " + new Date(note.createdAt).toLocaleString()}
                    </ListGroupItem>
                </LinkContainer>
            ) : (
                <LinkContainer key="new" to="/notes/new">
                    <ListGroupItem>
                        <h4>
                            <b>{"\uFF0B"}</b> Create a new note
                        </h4>
                    </ListGroupItem>
                </LinkContainer>
            )
        );
    }

    function renderLander() {
        return (
            <div className="lander">
                <h1>Scratch</h1>
                <p>A simple note taking app</p>
            </div>
        );
    }

    function renderNotes() {
        return (
            <div className="notes">
                <PageHeader>Your Notes</PageHeader>
                <ListGroup>
                    {!isLoading && renderNotesList(notes)}
                </ListGroup>
            </div>
        );
    }

    return (
        <div className="Home">
            {props.isAuthenticated ? renderNotes() : renderLander()}
        </div>
    );
}