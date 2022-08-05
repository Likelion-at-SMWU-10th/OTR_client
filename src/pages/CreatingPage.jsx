import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CreatingCard from './components/CreatingCard';

const CreatingPage = () => {
    return (
        <>
            <div>
                <Header/>
                <br/><br/><br/>
                
                <br/><br/><br/>
                <div id ="container">
                <CreatingCard/>
                </div>
                <br/><br/>
                <Footer/>
            </div>
        </>
    );
};

export default CreatingPage;