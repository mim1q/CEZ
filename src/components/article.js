import React from 'react';
import styled from 'styled-components';
import devices from '../definitions/devices';
import {lighten} from 'polished';
import Link from './styled/link';

const ArticleContainer = styled(Link)`

    margin: 20px;
    border-radius: 20px;
    width: 75%;
    padding: 10px;

    background-color: ${({theme}) => lighten(0.025, theme.colors.background)};
    box-shadow: 0px 5px 10px 0px ${({theme}) => theme.colors.shadow};

    @media ${devices.mobileL} {
        width: auto;
        min-width: 300px;
    }

    &:hover {
        transform: translateY(-10px);
        background-color: ${({theme}) => lighten(0.05, theme.colors.background)};
        box-shadow: 0px 15px 10px 0px ${({theme}) => theme.colors.shadow};
        &>h2 {
            color: ${({theme}) => theme.colors.accent};
        }
    }
    transition: transform 0.2s ease-in-out,
                box-shadow 0.2s ease-in-out;
`;

const ArticleTitle = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;

    font-size: 1.25rem;
    font-weight: 300;
    letter-spacing: 0.1em;
`;

const ArticleImageWrapper = styled.div`
    position: relative;
    border-radius: 10px;
    width: 100%;
    padding-bottom: 50%;
    overflow: hidden;
`;

const ArticleImage = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;

    object-fit: cover;
`;

const Article = ({title, imgSrc, href}) => 
<ArticleContainer to={href}>
    <ArticleTitle>{title}</ArticleTitle>
    <ArticleImageWrapper >
        <ArticleImage src={imgSrc} alt={title} />
    </ArticleImageWrapper>
</ArticleContainer>

export default Article;