import React from "react";
import { Link } from 'react-router-dom';
import "./Telas.css";

export default function Telas() {
    return (
        <div className="Telas">
            <h1>Isto é o conjunto de telas prontas!</h1>
                <ol>
                    <li><Link to="/template">Template</Link></li>
                    <li><Link to="/notfound">NotFound</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ol>
        </div>
    );
}