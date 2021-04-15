import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0px;
        font-size: 18px;
    }

    * {
        transition: 
            background-color 0.1s linear,
            color 0.1s linear;
    }
`

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
