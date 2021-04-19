import React from 'react';
import styled from 'styled-components';
import header_background from '../images/header-background.jpg'

const HeaderContainer = styled.header`
    position: relative;

    width: 100%;
    height: 100px;
    padding-bottom: 25%;

    background-image: ${'url(' + header_background + ')'};
    background-size: cover;
    background-position: top;

    font-family: ${({theme}) => theme.fonts.primary};
    z-index: -1;
`;

const HeaderOverlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({theme}) => theme.colors.secondary + 'DD'};
`;

const Title = styled.h1`
    margin: 0;

    color: ${({theme}) => theme.colors.accent};
    font-weight: 300;
    font-size: min(4rem, 6vw);
    letter-spacing: 0.1em;
    text-align: center;
`;

const Subtitle = styled.span`
    color: ${({theme}) => theme.colors.primary}!important;
    font-weight: 200;
`;

const Header = () =>
<HeaderContainer>
    <HeaderOverlay>
        <Title>
            Centrum Edukacji Zawodowej<br />
            <Subtitle> w Stalowej Woli</Subtitle>
        </Title>
    </HeaderOverlay>
</HeaderContainer>

export default Header;