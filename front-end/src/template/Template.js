import React from "react";
import "./Template.css";
import { Link } from 'react-router-dom';

export default function Template() {
    // Remover Link to='/' 
    return (
        <div className="Template">
            <h1>This is a Template!</h1>
            <Link to="/">voltar</Link>
        </div>
        
    );
}