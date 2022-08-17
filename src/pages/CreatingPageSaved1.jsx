import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CreatingCardSaved1 from './components/CreatingCardSaved1';

const CreatingPageSaved = () => {
    return (
        <>
            <div>
                <Header/>
                <br/><br/><br/>
                <br/><br/><br/>
                <div id ="container">
                <CreatingCardSaved1/>
                </div>
                <br/><br/>
                <Footer/>
            </div>
        </>
    );
};

export default CreatingPageSaved;