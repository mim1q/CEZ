import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';
import logo_cez_light from '../images/logo-cez-light.svg';
import logo_cez_dark from '../images/logo-cez-dark.svg';
import {device} from '../definitions/devices';
import {useMediaQuery} from 'react-responsive';
import NavbarLink from './navbar_link'
import { DarkTheme } from '../definitions/themes';

const NavbarContainer = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 10px;
    height: 50px;

    font-family: ${props => props.theme.fonts.primary};
    background-color: ${props => props.theme.backgroundColor};

    @media ${device.tablet} {
        letter-spacing: 0.1em;
    }

    @media ${device.laptop} {
        padding: 10px 40px 10px 40px;
    }
`

const NavbarLogoContainer = styled.div`
    display: grid;
    height: 100%;

    grid-template-columns: 50px autofit;
    grid-template-rows: 25px 25px;
    grid-template-areas:
        "image text-top"
        "image text-bottom";

    &>img {
        grid-area: image;
        height: 50px;
        margin-right: 10px;
    }

    &>span {
        word-wrap: break-word; 
        color: ${props => props.theme.accentColor};
        display: flex;
        align-items: center;
    }

    &>span:last-child {
        color: ${props => props.theme.textSecondaryColor};
        font-weight: 100;
        &:before {
            content: ' ';
        }
    }
`


const NavbarMenu = styled.nav`
    display: flex;
    align-items: center;

    height: 20px;

    &>button {
        width: 40px;
        height: 40px;
        margin-right: 20px;
    }
`


const Navbar = ({themeCallback}) => {

    const isLaptop = useMediaQuery({query: device.laptop});
    const isMobileL = useMediaQuery({query: device.mobileL});

    const themeContext = useContext(ThemeContext);

    return (
    <NavbarContainer>
        <NavbarLogoContainer>
            <img 
                src={themeContext === DarkTheme ? logo_cez_dark : logo_cez_light} 
                alt="Logo Centrum Edukacji Zawodowej w Stalowej Woli" 
            />
            <span>{isMobileL ? "Centrum Edukacji Zawodowej" : "CEZ"}</span>
            <span>Stalowa Wola</span>
        </NavbarLogoContainer>
        <NavbarMenu>
            <button onClick={themeCallback}/>
            {isLaptop && 
            <>
                <NavbarLink href='#' text="Aktualności"/>
                <NavbarLink href='#' text="Plan Lekcji"/>
                <NavbarLink href='#' text="Kierunki"/>
                <NavbarLink href='#' text="Kontakt"/>
            </>
            }
        </NavbarMenu>
    </NavbarContainer>
);};

export default Navbar;