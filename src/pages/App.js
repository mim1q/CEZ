import React, {useState} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../components/header';
import Navbar from '../components/navbar';
import { DarkTheme, LightTheme } from "../definitions/themes";

const AppContainer = styled.div`
`

const App = () => {

    const [theme, setTheme] = useState(DarkTheme);

    return (
    <ThemeProvider theme={theme}>
        <AppContainer>
            <Navbar themeCallback = {() => {
                setTheme(theme === DarkTheme ? LightTheme : DarkTheme)}} 
            />
            <Header />
        </AppContainer>
    </ThemeProvider>
);};
    
export default App;
