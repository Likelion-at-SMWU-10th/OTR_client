import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import SevenDaysNotice from './pageimg/SevenDaysNotice.png';
import './DayOne.css';
import DayFiveCard from './components/DayFiveCard';

const DayFive = () => {
    return (
        <>
        <Header/>
        <br/><br/><br/>
        <div class="notice"><img alt="notice"src={SevenDaysNotice}/></div>
        <br/><br/><br/>
        <div id = "container">
        <DayFiveCard/>
        </div>
        <br/><br/><br/>
        </>
    );
};

export default DayFive;