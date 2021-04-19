import React from 'react';
import styled from 'styled-components';
import devices from '../definitions/devices';

const ArticleContainer = styled.article`
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    margin: 20px;
    margin-top: 40px;
    border: 1px solid ${({theme}) => theme.accentColor};
    padding: 20px;
    max-width: 800px;

    @media ${devices.tablet} {
        flex-direction: row;
        transform: translateX(25px);

        &:nth-child(even) {
            transform: translateX(-25px);
        }
    }
`;

const ArticleText = styled.div`
    width: 100%;
    font-family: ${({theme}) => theme.fonts.secondary};

    z-index: 50;
    @media ${devices.tablet} {
        flex-direction: 50%;
    }
`;

const ArticleTitle = styled.h3`
    margin-top: -40px;
    padding: 20px;

    min-width: 50%;

    background-color: ${({theme}) => theme.accentColor};

    color: ${({theme}) => theme.textPrimaryColor};
    font-size: 1.5rem;
    font-weight: 500;
    text-decoration: underline;
    text-align: center;

    @media ${devices.tablet} {
        width: 100%;
        letter-spacing: 0.05em;
    }
`;

const ArticleDescription = styled.div`
    color: ${({theme}) => theme.textSecondaryColor};
    text-align: justify;
    margin-bottom: 20px;
    font-weight: 100;

    @media ${devices.tablet} {
        margin-right: 20px;
        margin-bottom: 0px;
        letter-spacing: 0.1em;
    }
`;

const ArticleImageWrapper = styled.div`
    position: relative;

    flex-shrink: 0;
    width: 100%;
    height: 0px;
    padding-bottom: 50%;

    background-color: red;
    object-fit: cover;

    @media ${devices.tablet} {
        width: min(400px, 50%);
        height: 400px;
        padding-bottom: 0px;
    }
`;

const ArticleImage = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;

    object-fit: cover;
`;


const Article = ({children, title, imgSrc}) => 
<ArticleContainer>
    <ArticleText>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleDescription>{children}</ArticleDescription>
    </ArticleText>
    <ArticleImageWrapper >
        <ArticleImage src={imgSrc} alt={title} />
    </ArticleImageWrapper>
</ArticleContainer>


export default Article;