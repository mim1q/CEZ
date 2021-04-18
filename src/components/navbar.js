import React, {useState} from 'react';
import styled from 'styled-components';
import logo_cez_dark from '../images/logo-cez-dark.svg';
import {device} from '../definitions/devices';
import {useMediaQuery} from 'react-responsive';
import NavbarMenu from './navbar_menu'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

const NavbarContainer = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 10px;
    height: 50px;

    box-shadow: 0px 5px 10px 0px ${({theme}) => theme.shadowColor};
    z-index: 100;

    font-family: ${({theme}) => theme.fonts.primary};
    background-color: ${({theme}) => theme.backgroundColor};

    @media ${device.tablet} {
        letter-spacing: 0.1em;
    }

    @media ${device.laptop} {
        padding: 10px 40px 10px 40px;
    }

    &.hidden {
        top: -70px;
    }
`;

const NavbarLogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;

    &>img {
        height: 50px;
        margin-right: 10px;
    }

    &>span {
        color: ${({theme}) => theme.accentColor};
        display: flex;
        flex-direction: column;
        align-items: left;

        line-height: 1em;
        font-weight: 300;
    }

    &>span>span {
        color: ${({theme}) => theme.textSecondaryColor};
        font-weight: 100;
    }
`;

const NavbarButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;

    background: none;
    border: none;

    color: ${({theme}) => theme.textSecondaryColor};
    font-size: 1.75rem;

    cursor: pointer;
`;


const Navbar = () => {

    const [MobileMenuHidden, setMobileMenuHidden] = useState(true);

    const isLaptop = useMediaQuery({query: device.laptop});
    const isMobileL = useMediaQuery({query: device.mobileL});

    const links = [
        {path: '/', name: 'Strona główna'},
        {path: '/news', name: 'Aktualności'},
        {path: '/timetable', name: 'Plan Lekcji'},
        {path: '/contact', name: 'Kontakt'},
    ]

    return (
    <>
        <NavbarContainer className=' '>
            <NavbarLogoContainer>
                <img 
                    src={logo_cez_dark}
                    alt='Logo Centrum Edukacji Zawodowej w Stalowej Woli' 
                />
                <span>Centrum Edukacji {!isMobileL && <br />} Zawodowej
                    <span>Stalowa Wola</span>
                </span>
                
            </NavbarLogoContainer>
            {isLaptop 
                ? <NavbarMenu links = {links} /> 
                : <NavbarButton onClick = {() => {setMobileMenuHidden(!MobileMenuHidden)}}>
                    <FontAwesomeIcon 
                        icon={MobileMenuHidden ? faBars : faTimes}
                    />
                </NavbarButton>
            }
        </NavbarContainer>
        {!isLaptop && <NavbarMenu hide = {() => setMobileMenuHidden(true)} links = {links} isHidden = {MobileMenuHidden}/>}
    </>
    );
};

export default Navbar;