import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {DarkTheme} from "../definitions/themes";
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import {createGlobalStyle} from 'styled-components';
import ScrollToTop from 'react-router-scroll-top';

import Navbar from '../components/navbar';
import Footer from '../components/footer'

import Home from './home';
import News from './news';
import Timetable from './timetable';
import Contact from './contact';
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
                    <Home />
                </Route>
                <Route exact path="/aktualnosci">
                    <News />
                </Route>
                <Route exact path="/plan-lekcji">
                    <Timetable />
                </Route>
                <Route exact path="/kontakt">
                    <Contact />
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
