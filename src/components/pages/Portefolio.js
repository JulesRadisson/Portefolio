import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import Icons from '../Icons';
import Presentation from '../Presentation';
import TimeLine from '../TimeLine';
import Contact from '../Contact';

function Portefolio() {
    return (
        <>
            <Presentation />
            <Icons />
            <TimeLine />
            <Cards />
            <Contact/>
            <Footer/>
        </>
    )
}

export default Portefolio;