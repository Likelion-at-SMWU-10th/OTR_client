import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import LoginInfo from './components/LoginInfo';

const LoginPage = () => {
    return (
        <>
        <Header />

        <LoginInfo />
        <br></br>
        <br></br>
        <Login />
        <br></br>
        <br></br>
        <Footer />
        </>
    );
};

export default LoginPage;