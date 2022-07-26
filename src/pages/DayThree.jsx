import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import SevenDaysNotice from './pageimg/SevenDaysNotice.png';
import './DayOne.css';
import DayThreeCard from './components/DayThreeCard';

const DayThree = () => {
    return (
        <>
        <Header/>
        <br/><br/><br/>
        <div class="notice"><img alt="notice"src={SevenDaysNotice} /></div>
        <br/><br/><br/>
        <DayThreeCard/>
        <br/><br/><br/>
        </>
    );
};

export default DayThree;