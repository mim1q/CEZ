import React from 'react';
import Header from '../components/header';
import CardList from '../components/card_list';
import styled from 'styled-components';

import kandydaci_img from '../images/kandydaci.jpg';
import plan_lekcji_img from '../images/plan_lekcji.jpg';
import aktualnosci_img from '../images/aktualnosci.jpg';
import osiagniecia_img from '../images/osiagniecia.jpg';
import projekty_img from '../images/projekty.jpg';
import dodatkowe_img from '../images/dodatkowe.jpg';
import galeria_img from '../images/galeria.jpg';
import kontakt_img from '../images/kontakt.jpg';


const articles = [
    {key: 0, title: 'Dla kandydatów', img: kandydaci_img, href: '/dla-kandydatow'},
    {key: 1, title: 'Plan lekcji', img: plan_lekcji_img, href: '/plan-lekcji'},
    {key: 2, title: 'Aktualności ', img: aktualnosci_img, href: '/aktualnosci'},
    {key: 3, title: 'Osiągnięcia uczniów ', img: osiagniecia_img, href: '/osiagniecia'},
    {key: 4, title: 'Projekty ', img: projekty_img, href: '/projekty'},
    {key: 5, title: 'Zajęcia dodatkowe', img: dodatkowe_img, href: '/dodatkowe'},
    {key: 6, title: 'Galeria', img: galeria_img, href: '/galeria'},
    {key: 7, title: 'Kontakt', img: kontakt_img, href: '/kontakt'},
];

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;

    z-index: 50;
    box-shadow: 0px -5px 10px 0px ${({theme}) => theme.colors.shadow};
`;

const StronaGlowna = () =>
<>
    <Header />
    <Main>
        <CardList articles={articles}/>
    </Main>
</>

export default StronaGlowna;
