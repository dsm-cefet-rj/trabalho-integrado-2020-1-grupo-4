// import React, { useEffect, useState } from "react";
//import { ListGroup, ListGroupItem, PageHeader, Button } from "react-bootstrap";
import React from "react";
import { Switch, Route } from "react-router-dom";

import { Login, ResetPassword, Signup, Welcome } from "./";

import "./Home.css";
// import { LinkContainer } from "react-router-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { NotesSelector } from "../store/notes/selectors";
// import { AuthUserSelector } from "../store/auth/selectors";
// import { getNotesService } from "../store/notes/services";

export default function Home(props) {
    return (
        <>
            <div className="home" id="home">
                <div className="title" id="home-title">
                    <h1> Scratch </h1>
                </div>

                <Switch>
                    <Route exact path={"/"} component={Welcome} />
                    <Route path={"/login"} component={Login} />
                    <Route path={"/signup"} component={Signup} />
                </Switch>
            </div>
        </>

    );
}


    // const dispatch = useDispatch()
    // const user = useSelector(AuthUserSelector)
    // const notes = useSelector(NotesSelector);
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     async function onLoad() {
    //         if (!props.isAuthenticated) {
    //             return;
    //         }
    //         try {
    //             await getNotesService(dispatch, user.id)
    //         } catch (e) {
    //             alert(e);
    //         }

    //         setIsLoading(false);
    //     }

    //     onLoad();
    // }, [props.isAuthenticated]);

    // function renderNotesList(notes) {
    //     return [{}].concat(notes).map((note, i) =>
    //         i !== 0 ? (
    //             <LinkContainer key={note.id} to={`/notes/${note.id}`}>
    //                 <ListGroupItem header={note.content.trim().split("\n")[0]}>
    //                     {"Created: " + new Date(note.createdAt).toLocaleString()}
    //                 </ListGroupItem>
    //             </LinkContainer>
    //         ) : (
    //             <LinkContainer key="new" to="/notes/new">
    //                 <ListGroupItem>
    //                     <h4>
    //                         <b>{"\uFF0B"}</b> Create a new note
    //                     </h4>
    //                 </ListGroupItem>
    //             </LinkContainer>
    //         )
    //     );
    // }

    // function renderLander() {
    //     return (
    //         <div className="lander">
    //             <h1>Scratch</h1>
    //             <p>A simple note taking app</p>
    //         </div>
    //     );
    // }

    // function renderNotes() {
    //     return (
    //         <div className="notes">
    //             <PageHeader>Your Notes</PageHeader>
    //             <ListGroup>
    //                 {!isLoading && renderNotesList(notes)}
    //             </ListGroup>
    //         </div>
    //     );
    // }

    // return (
    //     <div className="Home">
    //         {props.isAuthenticated ? renderNotes() : renderLander()}
    //     </div>
    // );

