import React, { useEffect, useRef, UseState} from "react";

import { useDispatch } from "react-redux";

import { useFormFields } from "../../../../libs/hooksLib";

import './NewNote.css'
    // const INITIAL_STATE = {
    //     noteName: "",
    //     contents: "",
    //     attachments_name: "",
    //     owner_id: "",
    //   };

export function NewNote(){
    const dispatch = useDispatch()
    const [fields, handleFieldChange] = useFormFields({
        noteName: "",
        contents: "",
        attachments_name: "",
        attachment: "",
        owner_id: localStorage.getItem('UserID'), 
    });

    const [isLoading, setIsLoading] = useState(false);

    function validateForm(){
        return (
            fields.noteName.lenght > 0 &&
            fields.contents.lenght > 0 
        );
    }
    


;    
    
    return(
        <h1>NewNote</h1>
    );

}