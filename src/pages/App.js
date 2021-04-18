import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../components/header';
import Navbar from '../components/navbar';
import { DarkTheme } from "../definitions/themes";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 18px;
    }

    body {
        margin: 0px;
    }

    * {
        transition: 
            background-color 0.1s linear,
            color 0.1s linear;
    }
`;

const AppContainer = styled.div`
`

const App = () => {
    return (
    <Router>
        <ThemeProvider theme={DarkTheme}>
            <GlobalStyle />
            <AppContainer>
                <Navbar />
                <Header />
                <Switch>
                    <Route path="/">

                    </Route>
                </Switch>
            </AppContainer>
        </ThemeProvider>
    </Router>
    );
};
    
export default App;
