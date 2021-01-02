import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { NotesSelector } from "../../store/notes/selectors";
import { AuthUserSelector } from "../../store/auth/selectors";
import { getNotesService } from "../../store/notes/services";

import LogOutButton from "../../components/LogOutButton/LogOutButton.jsx";

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
    }, []);

    function renderNotesList(notes) {
        // return [{}].concat(notes).map((note, i) =>
        //     i !== 0 ? (
        //         <LinkContainer key={note.id} to={`/notes/${note.id}`}>
        //             <ListGroupItem header={note.content.trim().split("\n")[0]}>
        //                 {"Created: " + new Date(note.createdAt).toLocaleString()}
        //             </ListGroupItem>
        //         </LinkContainer>
        //     ) : (
        //         <LinkContainer key="new" to="/notes/new">
        //             <ListGroupItem>
        //                 <h4>
        //                     <b>{"\uFF0B"}</b> Create a new note
        //                 </h4>
        //             </ListGroupItem>
        //         </LinkContainer>
        //     )
        // );
        return {}
    }

    return(
        <body className='Dashboard'>
        <LogOutButton props={props} />
            <div className="botoes">
                <h1>Dashboard</h1>
                <h6>Adicione novas notas</h6>
                <ul className="separator">
                    <li>Nova Nota
                        <a href="/note">
                            <i className="fas fa-plus fa-lg fa-border fa-pull-right"></i>
                        </a></li>
                    <li></li>

                </ul>
            </div>
        </body>
    );
}

{/* <div className="notes">]
<ListGroup>
    {!isLoading && renderNotesList(notes)}
</ListGroup>
</div> */}