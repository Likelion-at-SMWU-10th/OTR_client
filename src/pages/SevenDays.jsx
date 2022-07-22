import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';

const LoginPage = () => {
    return (
        <>
        <Header/>
        <h1> 7일문답작성페이지 입니다! </h1>
        <Link to ="/"><p>홈으로가기</p></Link>
        </>
    );
};

export default LoginPage;