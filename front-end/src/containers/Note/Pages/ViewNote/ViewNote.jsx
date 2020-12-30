import React from "react";

import './ViewNote.css'

export function ViewNote(){
    return(
        <body>
        <h1>Nome Nota</h1>
        <form action="#" method="post">
            <fieldset>

                <fieldset className="grupo">
                    <div className="campo">
                        <label htmlFor="nome">Nome</label>

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
    );

}