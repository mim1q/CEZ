import React from 'react';
import styled from 'styled-components';

const NavbarLinkElement = styled.a`
    padding-left: 20px;
    padding-right: 20px;

    color: ${props => props.theme.textSecondaryColor};
    text-decoration: none;
    font-weight: 200;

    &:hover {
        text-decoration: underline; 
    }
`

const NavbarLinkSeparator = styled.div`
    height: 100%;
    border-left: 1px solid ${props => props.theme.textSecondaryColor};

    transition: border-color 0.1s linear;
`

const NavbarLink = ({href, text, last}) =>
<>
<NavbarLinkSeparator />
<NavbarLinkElement href={href}>{text}</NavbarLinkElement>
</>

export default NavbarLink;