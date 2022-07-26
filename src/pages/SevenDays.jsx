import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SevenDaysQuote from './pageimg/SevenDaysQuote.png';
import SevenDaysNotice from './pageimg/SevenDaysNotice.png';
import SevenDaysHowto from './pageimg/SevenDaysHowto.png';
import StartButton from './pageimg/StartButton.png';
import './SevenDays.css';


const SevenDays = () => {
    return (
        <>
        <Header/>
        <br/><br/>
        <div id="container">
            <div class="contents">
                <img className="sevendaysnotice" alt="sevendaysnotice" src={SevenDaysNotice} />
            </div>
        </div>
        <br/><br/>
        <div id="container">
            <div class="contents">
                <img className="sevendaysquote" alt="sevendaysquote" src={SevenDaysQuote} />
            </div>
        </div>
        <br/><br/>
        <div id="container">
            <div class="contents">
                <img className="sevendayshowto" alt="sevendayshowto" src={SevenDaysHowto} />
            </div>
        </div>
        <br/><br/>
        <div> <p>문답을 시작하시겠어요?</p> </div>
        <div class="contents">
            <Link to ="/dayone"><img alt="start" src={StartButton} /></Link>
        </div>
        <Footer/>
        </>
    );
};

export default SevenDays;