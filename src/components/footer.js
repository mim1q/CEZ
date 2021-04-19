import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    box-shadow: 0px -5px 10px 0px ${({theme}) => theme.colors.shadow};
    min-height: 70px;
    padding: 20px;

    font-family: ${({theme}) => theme.fonts.primary};
    color: ${({theme}) => theme.colors.primary};
    font-weight: 100;
    letter-spacing: 0.1em;

    &>b {
        font-weight: 300;
        color: ${({theme}) => theme.colors.accent};
    }
`;

const Footer = () =>
<FooterContainer>
    Autor Projektu: Dominik Ziętko kl. 2i1
    <br />
    <b>STRONA JEST NIEOFICJALNYM PROJEKTEM WYKONANYM W RAMACH ĆWICZEŃ</b>
</FooterContainer>

export default Footer;