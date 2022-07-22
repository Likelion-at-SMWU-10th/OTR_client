import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import LoginRegister from './components/LoginRegister';

const AboutOtr = () => {
    return (
        <>
        <Header/>
        <LoginRegister/>
        <h1> About OTR </h1>
        <Link to ="/"><p>홈으로가기</p></Link>
        </>
    );
};

export default AboutOtr;