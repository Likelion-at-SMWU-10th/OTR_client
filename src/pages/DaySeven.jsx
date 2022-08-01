import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import SevenDaysNotice from './pageimg/SevenDaysNotice.png';
import './DayOne.css';
import DaySevenCard from './components/DaySevenCard';
import Footer from './components/Footer';

const DaySeven = () => {
    return (
        <>
        <Header/>
        <br/><br/><br/>
        <div class="notice"><img alt="notice"src={SevenDaysNotice}/></div>
        <br/><br/><br/>
        <div id = "container">
        <DaySevenCard/>
        </div>
        <br/><br/>
        <Footer/>
        </>
    );
};

export default DaySeven;