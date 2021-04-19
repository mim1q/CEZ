import React from 'react';
import Header from '../components/header';
import ArticleList from '../components/article_list';
import styled from 'styled-components';

import placeholder from '../images/placeholder.jpg';

import kandydaci_img from '../images/kandydaci.jpg';
import plan_lekcji_img from '../images/plan_lekcji.jpg';
import aktualnosci_img from '../images/aktualnosci.jpg';


const articles = [
    {key: 0, title: 'Dla kandydatów', img: kandydaci_img, href: '/dla-kandydatow'},
    {key: 1, title: 'Plan lekcji', img: plan_lekcji_img, href: '/plan-lekcji'},
    {key: 2, title: 'Aktualności ', img: aktualnosci_img, href: '/aktualnosci'},
    {key: 3, title: 'Osiągnięcia uczniów ', img: placeholder, href: '/osiagniecia'},
    {key: 4, title: 'Projekty ', img: placeholder, href: '/projekty'},
    {key: 5, title: 'Zajęcia dodatkowe', img: placeholder, href: '/dodatkowe'},
    {key: 6, title: 'Galeria', img: placeholder, href: '/galeria'},
    {key: 7, title: 'Kontakt', img: placeholder, href: '/kontakt'},
];

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    z-index: 100;
    box-shadow: 0px -5px 10px 0px ${({theme}) => theme.colors.shadow};
`;

const Home = () =>
<>
    <Header />
    <Main>
        <ArticleList articles={articles}/>
    </Main>
</>

export default Home;
