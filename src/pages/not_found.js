import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const NotFoundText = styled.span`
    font-family: ${({theme}) => theme.fonts.secondary};
    color: ${({theme}) => theme.colors.primary};
    font-size: min(3rem, 5vw);
    text-align: center;

    &>b {
        color: ${({theme}) => theme.colors.accent};
    }
`;

const NotFound = () =>
<Main>
    <NotFoundText><b>404</b><br />nie znaleziono strony</NotFoundText>
</Main>

export default NotFound;