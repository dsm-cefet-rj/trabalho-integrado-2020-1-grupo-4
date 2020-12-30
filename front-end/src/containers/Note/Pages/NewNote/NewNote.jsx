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
    // const dispatch = useDispatch()
    // const [fields, handleFieldChange] = useFormFields({
    //     noteName: "",
    //     contents: "",
    //     attachments_name: "",
    //     attachment: "",
    //     owner_id: localStorage.getItem('UserID'), 
    // });

    // const [isLoading, setIsLoading] = useState(false);

    // function validateForm(){
    //     return (
    //         fields.noteName.lenght > 0 &&
    //         fields.contents.lenght > 0 
    //     );
    // }
    


;    
    
    return(
        <>

    <body>
        <h1>Nova Nota</h1>
            <form action="#" method="post">
                <fieldset>

                    <fieldset className="grupo">
                        <div className="campo">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" />
                        </div>
                    </fieldset>
                    <div className="campo">
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea ></textarea>


                    </div>

                    <div className="upload-btn-wrapper">
                        <button className="btn">Upload File</button>
                        <input type="file" name="myfile"/>
                    </div><br/>



                    <div className='botaosalvarecancelar'>


                        <button className="botao submit" type="submit" name="submit">Salvar</button><br/>

                        <button className="botao2" type="submit" name="submit">Cancelar</button>

                    </div>
                    </fieldset>
            </form>
</body>


            </>
    );

}