import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import SevenDaysNotice from './pageimg/SevenDaysNotice.png';
import './DayOne.css';
import DayThreeCard from './components/DayThreeCard';
import Footer from './components/Footer';

const DayThree = () => {
    return (
        <>
        <Header/>
        <br/><br/><br/>
        <div class="notice"><img alt="notice"src={SevenDaysNotice} /></div>
        <br/><br/><br/>
        <div id ="container">
        <DayThreeCard/>
        </div>
        <br/><br/>
        <Footer/>
        </>
    );
};

export default DayThree;