import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import LoginRegister from './components/LoginRegister';
import OtrDetail from './pageimg/OtrDetail.png';
import OtrCard from './pageimg/OtrCard.png';
import StartButton from './pageimg/StartButton.png';

const AboutOtr = () => {
    return (
        <>
        <Header/>
        <LoginRegister/>
        <div><img src={OtrDetail} /></div>
        <div><img src={OtrCard} /></div>
        <div><img src={StartButton} /></div>
        <h1> About OTR </h1>
        <Link to ="/"><p>홈으로가기</p></Link>
        </>
    );
};

export default AboutOtr;