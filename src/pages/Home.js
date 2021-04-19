import React from 'react';
import Header from '../components/header';
import ArticleList from '../components/article_list';
import styled from 'styled-components';

import placeholder from '../images/placeholder.jpg';

const placeholder_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

const articles = [
    {key: 0, title: "Dla kandydatów", img: placeholder, description: placeholder_text},
    {key: 1, title: "Aktualności", img: placeholder, description: placeholder_text},
    {key: 2, title: "Zajęcia dodatkowe ", img: placeholder, description: placeholder_text},
    {key: 3, title: "Osiągnięcia uczniów ", img: placeholder, description: placeholder_text},
    {key: 4, title: "Galeria", img: placeholder, description: placeholder_text},
    {key: 5, title: "Projekty ", img: placeholder, description: placeholder_text},
]

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    z-index: 100;
    box-shadow: 0px -5px 10px 0px ${({theme}) => theme.shadowColor};
`;

const Home = () =>
<>
    <Header />
    <Main>
        <ArticleList articles={articles}/>
    </Main>
</>

export default Home;