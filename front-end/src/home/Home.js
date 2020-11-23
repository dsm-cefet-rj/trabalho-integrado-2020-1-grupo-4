import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css";

export default function Home() {
    return (
        <div className="Home">
            <h1>Isto é o conjunto de telas prontas!</h1>
                <ol>
                    <li><Link to="/template">Template</Link></li>
                    <li><Link to="/notfound">NotFound</Link></li>
                </ol>
        </div>
    );
}