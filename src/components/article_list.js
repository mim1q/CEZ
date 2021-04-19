import React from 'react';
import styled from 'styled-components';
import Article from '../components/article';

const Articles = styled.div`
    width: 100%;
    max-width: 800px;
`;

const ArticleList = ({articles}) =>
<Articles>
    {articles.map((article) => 
        <Article imgSrc={article.img} title={article.title}>{article.description}</Article>
    )}
</Articles>

export default ArticleList;