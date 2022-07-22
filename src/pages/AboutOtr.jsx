import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import LoginRegister from './components/LoginRegister';
import OtrDetail from './pageimg/OtrDetail.png';
import OtrCard from './pageimg/OtrCard.png';
import StartButton from './pageimg/StartButton.png';
import './AboutOtr.css'

const AboutOtr = () => {
    return (
        <>
        <Header/>
        <LoginRegister/>
        <br/><br/><br/>
        <div class="contents"><img src={OtrDetail} /></div>
        <br/><br/><br/>
        <div class="contents"><img className="otrcard" src={OtrCard} /></div>
        <br/><br/><br/>
        <div class="contents"><img src={StartButton} /></div>
        </>
    );
};

export default AboutOtr;