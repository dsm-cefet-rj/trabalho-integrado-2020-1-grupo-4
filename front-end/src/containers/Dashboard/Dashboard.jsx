import React, {useEffect, useState} from "react";
import {ListGroupItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

import {useDispatch, useSelector} from "react-redux";
import {NotesSelector} from "../../store/notes/selectors";
import {deleteNoteService, getNotesService} from "../../store/notes/services";

import LogOutButton from "../../components/LogOutButton/LogOutButton.jsx";
import {sortBy} from 'lodash'

export function Dashboard(props) {
    const dispatch = useDispatch()
    const notes = useSelector(NotesSelector);
    const [isLoading, setIsLoading] = useState(true);


    //DAR UM CONSOLE.LOG NESSAS NOTAS COM UMA OUTRA COSNT E NOME
    useEffect(() => {
        async function onLoad() {
            try {
                await getNotesService(dispatch)
                .then(
                    (data) => {
                        const testNotes = data;
                        //console.log(testNotes)
                    }
                )
            } catch (e) {
                alert(e);
            }
            setIsLoading(false);
        }
        onLoad();
    }, [dispatch]);

    function renderNotesList(notes) {
        return <>
            <LinkContainer key="new" to="/note">
                <ListGroupItem>
                    <h4>
                        <b>{"\uFF0B"}</b> Create a new note
                    </h4>
                </ListGroupItem>
            </LinkContainer>
            {sortBy(notes, 'created_at').reverse().map((note) =>
                <LinkContainer key={note._id} to={`/note/${note._id}`}>
                    <ListGroupItem header={note.noteName?.trim()}>
                        {"Created: " + new Date(note.created_at).toLocaleString()}
                    </ListGroupItem>
                </LinkContainer>
            )}
        </>
    }

    return(
        <main className='Dashboard'>
        <LogOutButton props={props} />
            <div className="botoes">
                <h1>Dashboard</h1>
                <ul className="separator" style={{marginTop: '24px'}}>
                    {renderNotesList(notes)}
                </ul>
            </div>
        </main>
    );
}

{/* <div className="notes">]
<ListGroup>
    {!isLoading && renderNotesList(notes)}
</ListGroup>
</div> */}
