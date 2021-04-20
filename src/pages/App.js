import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {DarkTheme} from "../definitions/themes";
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import {createGlobalStyle} from 'styled-components';
import ScrollToTop from 'react-router-scroll-top';

import Navbar from '../components/navbar';
import Footer from '../components/footer'

import StronaGlowna from './strona_glowna';
import Aktualnosci from './aktualnosci';
import PlanLekcji from './plan_lekcji';
import Kontakt from './kontakt';
import NotFound from './not_found';

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 18px;
    }

    body {
        margin: 0px;
        background-color: ${({theme}) => theme.colors.background};
    }

    h2 {
        color: ${({theme}) => theme.colors.primary};
        font-family: ${({theme}) => theme.fonts.secondary};
        font-weight: 300;
        font-size: 1rem;
    }
`;

const AppContainer = styled.div`
    padding-top: 70px;
`

const App = () =>
<Router>
    <ThemeProvider theme={DarkTheme}>
        <ScrollToTop />
        <GlobalStyle />
        <AppContainer>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <StronaGlowna />
                </Route>
                <Route exact path="/aktualnosci">
                    <Aktualnosci />
                </Route>
                <Route exact path="/plan-lekcji">
                    <PlanLekcji />
                </Route>
                <Route exact path="/kontakt">
                    <Kontakt />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
            <Footer />
        </AppContainer>
    </ThemeProvider>
</Router>
    
export default App;
