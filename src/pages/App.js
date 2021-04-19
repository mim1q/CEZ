import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Navbar from '../components/navbar';
import {DarkTheme} from "../definitions/themes";
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import {createGlobalStyle} from 'styled-components';
import Home from './Home';
import News from './News';
import Timetable from './Timetable';
import Contact from './Contact';
import ScrollToTop from 'react-router-scroll-top';
import Footer from '../components/footer'


const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 18px;
    }

    body {
        margin: 0px;
        background-color: ${({theme}) => theme.backgroundColor};
    }

    * {
        transition: 
            background-color 0.1s linear,
            color 0.1s linear;
    }

    h2 {
        color: ${({theme}) => theme.textSecondaryColor};
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
                <Route exact path="/news">
                    <News />
                </Route>
                <Route exact path="/timetable">
                    <Timetable />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
            </Switch>
            <Footer />
        </AppContainer>
    </ThemeProvider>
</Router>
    
export default App;
