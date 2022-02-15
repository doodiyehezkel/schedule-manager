import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from './context/UserContext';

import './index.css';
import App from './App';

ReactDOM.render(
    <UserProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </UserProvider>
    ,document.getElementById("root")
);

