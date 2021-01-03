import React from "react";

import './NewNote.css'
import LoaderButton from "../../../../components/LoaderButton/LoaderButton";
// const INITIAL_STATE = {
    //     noteName: "",
    //     contents: "",
    //     attachments_name: "",
    //     owner_id: "",
    //   };

export function NewNote(props){

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
    // };

return(
    <body>
        <h1>Nova Nota</h1>
            <form action="#" method="post">
                <fieldset>

                    <fieldset className="grupo">
                        <div className="campo">
                            <label htmlFor="nome">Nome Nota</label>
                            <input type="text" />
                        </div>
                    </fieldset>
                    <div className="campo">
                        <label htmlFor="mensagem">Mensagem da Nota</label>
                        <textarea ></textarea>
                    </div>

                    <div className="upload-btn-wrapper">
                        <button className="btn">Upload File</button>
                        <input type="file" name="myfile"/>
                    </div><br/>

                    <div className='botaosalvarecancelar'>
                        <LoaderButton className="botao submit"  type="submit" name="submit">Salvar</LoaderButton><br/><br/>
                        <button className="botao2" onClick={()=>props.history.push('/dashboard')} >Cancelar</button>
                    </div>

              </fieldset>
            </form>

</body>
);
}
