import React from "react";
import { Switch } from "react-router-dom";
import {
    EditNote,
    ViewNote,
    NewNote } from "./";


import AuthenticatedRoute from "../../components/AuthenticatedRoute/AuthenticatedRoute"
import GoBackButton from "../../components/GoBackButton/GoBackButton.jsx";

import "./Note.css";

export function Note(props) {
    return (
        <>
            <GoBackButton props={props}/>
            <Switch>
                <AuthenticatedRoute path="/note" exact component={NewNote} props={props} />
                <AuthenticatedRoute path="/note/:id" exact component={NewNote} props={props} />
            </Switch>
        </>
    );
}
