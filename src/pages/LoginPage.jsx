import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <>
        <h1> 로그인페이지 입니다! </h1>
        <Link to ="/"><p>홈으로가기</p></Link>
        </>
    );
};

export default LoginPage;