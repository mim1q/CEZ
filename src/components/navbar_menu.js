import React from 'react';
import styled from 'styled-components';
import {device} from '../definitions/devices';
import Link from './styled/Link';

const NavbarMenuContainer = styled.nav`

    position: fixed;

    display: flex;
    flex-direction: column;
    align-items: center;

    left: 0px;
    right: 0px;

    background-color: ${({theme}) => theme.backgroundColor};

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
        margin-top: ${({length}) => length * -50 + 'px'};
    }

    transition: margin-top 0.2s ease-in-out;
`;

const NavbarLink = styled(Link)`

    display: inline-flex;
    align-items: center;

    padding-left: 20px;
    height: 50px;

    color: ${({theme}) => theme.textSecondaryColor};
    font-weight: 200;

    &:not(:last-child):after {
        @media ${device.laptop} {
            content: ' ';
            display: inline-block;
            border-right: 1px solid ${({theme}) => (theme.textSecondaryColor + '40')};
            padding-left: 20px;
            height: 20px;
        }
    }

    :hover {
        text-decoration: underline;
    }
`;

const NavbarBackgroundOverlay = styled.div`
    position: absolute;
    display: fixed;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: ${({theme}) => (theme.shadowColor)};

    z-index: 98;

    @media ${device.laptop} {
        display: none;
    }
`;

const NavbarMenu = ({links, isHidden}) => 
<>
    <NavbarMenuContainer length={links.length} className={isHidden ? 'mobile-hidden' : null}>
        {links.map((link) => 
            <NavbarLink key={link.name} to={link.path}>{link.name}</NavbarLink>
        )}
    </NavbarMenuContainer>
    {!isHidden && <NavbarBackgroundOverlay />}
</>

export default NavbarMenu;