import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem, PageHeader } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { NotesSelector } from "@store/notes/selectors";
import { AuthUserSelector } from "@store/auth/selectors";
import { getNotesService } from "@store/notes/services";

import { Switch } from "react-router-dom";

import AuthenticatedRoute from "@components/AuthenticatedRoute/AuthenticatedRoute.js";

import LogOutButton from "@components/LogOutButton/LogOutButton.jsx";
import GoBackButton from "@components/GoBackButton/GoBackButton.jsx";

export function Dashboard(props) {

    const userProps = {
        isAuthenticated: props.isAuthenticated, 
        userHasAuthenticated: props.userHasAuthenticated
    }

    const dispatch = useDispatch()
    const user = useSelector(AuthUserSelector)
    const notes = useSelector(NotesSelector);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function onLoad() {
            if (!props.isAuthenticated) {
                return;
            }
            try {
                await getNotesService(dispatch, user.id)
            } catch (e) {
                alert(e);
            }

            setIsLoading(false);
        }

        onLoad();
    }, [props.isAuthenticated]);

    function renderNotesList(notes) {
        return [{}].concat(notes).map((note, i) =>
            i !== 0 ? (
                <LinkContainer key={note.id} to={`/notes/${note.id}`}>
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




    return(
        <>
        <LogOutButton props={userProps} />
        <h1>Your Archiver</h1>

        <div className="notes">
            <PageHeader>Your Notes</PageHeader>
                <ListGroup>
                    {!isLoading && renderNotesList(notes)}
                </ListGroup>
        </div>
        </>
    );

}