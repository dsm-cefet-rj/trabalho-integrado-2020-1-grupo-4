import React from "react"

import './GoBackButton.css'

export default function GoBackButton ({ props }) {
    const { location, history } = props;
    const initialPages = ['/home', '/home/welcome'];

    if (location === undefined){
        return(<></>)
    } else {
        return(
            <>
            {!initialPages.includes(location.pathname) && (
                <button className="goback" id='botao_03' onClick={history.goBack}>
                    <i className="fas fa-chevron-left"></i>
                </button>
            )}
            </>
        )
    }
}
