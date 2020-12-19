import React, { useState } from "react";
import Routes from "./routes";

import './App.css';

export default function App() {
    const [isAuthenticated, userHasAuthenticated] = useState(false);

    return (
        <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
    );
}