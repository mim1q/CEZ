import React from 'react';
import styled from 'styled-components';
import Card from './card';

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    margin: 40px 0px 40px 0px;

    max-width: 1200px;
`;

const CardList = ({articles}) =>
<Cards>
    {articles.map((article) => 
        <Card imgSrc={article.img} title={article.title} href={article.href}></Card>
    )}
</Cards>

export default CardList;