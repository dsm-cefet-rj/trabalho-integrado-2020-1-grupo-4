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
                <AuthenticatedRoute path="/note/viewnote" exact component={ViewNote} />
                <AuthenticatedRoute path="/home/editnote" exact component={EditNote} />
            </Switch>
        </>
    );
}