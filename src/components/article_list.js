import React from 'react';
import styled from 'styled-components';
import Article from '../components/article';

const Articles = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    margin: 40px 0px 40px 0px;

    max-width: 1200px;
`;

const ArticleList = ({articles}) =>
<Articles>
    {articles.map((article) => 
        <Article imgSrc={article.img} title={article.title} href={article.href}></Article>
    )}
</Articles>

export default ArticleList;