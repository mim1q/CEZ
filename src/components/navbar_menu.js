import React from 'react';
import styled from 'styled-components';
import {device} from '../definitions/devices';
import Link from './styled/link';

const NavbarMenuContainer = styled.nav`

    position: fixed;

    display: flex;
    flex-direction: column;
    align-items: center;

    left: 0px;
    right: 0px;

    background-color: ${({theme}) => theme.colors.background};

    z-index: 99;

    font-family: ${({theme}) => theme.fonts.primary};

    @media ${device.laptop} {
        position: static;

        flex-direction: row;

        width: auto;
        height: 100%;
    }

    &.mobile-hidden {
        position: fixed;
        margin-top: ${({length}) => length * -70 + 'px'};
    }

    transition: margin-top 0.2s ease-in-out;
`;

const NavbarLink = styled(Link)`
    display: flex;
    align-items: center;
    flex-direction: column;

    padding-left: 20px;
    padding-top: 20px;
    height: 50px;

    color: ${({theme}) => theme.colors.primary};
    font-weight: 300;

    &:not(:last-child):after {
        display: block;
        content: ' ';
        border-bottom: 1px solid ${({theme}) => (theme.colors.primary + '40')};
        margin-top: 20px;
        width: 90vw;

        @media ${device.laptop} {
            display: inline-block;
            border-bottom: none;
            margin-top: 0px;
            border-right: 1px solid ${({theme}) => (theme.colors.primary + '40')};
            padding-left: 20px;
            width: 0px;
            height: 20px;
        }
        transition: transform 0.2s ease-in-out;
    }

    @media ${device.laptop} {
        flex-direction: row;
        padding-top: 0px;
        &:hover {
            transform: translateY(-5px);
            color: ${({theme}) => theme.colors.accent};
            &:after {
                transform: translateY(5px);
            }
        }
    }

    transition: transform 0.2s ease-in-out;
`;

const NavbarBackgroundOverlay = styled.div`
    position: fixed;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: ${({theme}) => (theme.colors.shadow)};

    z-index: 98;

    @media ${device.laptop} {
        display: none;
    }
`;

const NavbarMenu = ({hide, links, isHidden}) => 
<>
    <NavbarMenuContainer length={links.length} className={isHidden ? 'mobile-hidden' : null}>
        {links.map((link) => 
            <NavbarLink key={link.key} to={link.path} onClick={hide}>{link.name}</NavbarLink>
        )}
    </NavbarMenuContainer>
    {!isHidden && <NavbarBackgroundOverlay />}
</>

export default NavbarMenu;