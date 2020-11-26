import React from "react";



export const Dashboard = (props) => {
    
    const logout = () => {
        localStorage.removeItem('user_id')
        props.history.push('/')

    }
    
    
    return(
        <>
            <h2>Gambiarra</h2>
            <button onClick={logout} href='/'>logout</button>
        </>
    )
}