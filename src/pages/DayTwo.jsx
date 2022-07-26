import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import SevenDaysNotice from './pageimg/SevenDaysNotice.png';
import './DayOne.css';
import DayTwoCard from './components/DayTwoCard';
import Footer from './components/Footer';

const DayTwo = () => {
    return (
        <>
        <Header/>
        <br/><br/><br/>
        <div class="notice"><img alt="notice"src={SevenDaysNotice} /></div>
        <br/><br/><br/>
        <div id ="container">
        <DayTwoCard/>
        </div>
        <br/><br/>
        <Footer/>
        </>
    );
};

export default DayTwo;