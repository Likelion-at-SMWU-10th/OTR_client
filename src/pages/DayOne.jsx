import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import SevenDaysNotice from './pageimg/SevenDaysNotice.png';
import './DayOne.css';
import DayOneCard from './components/DayOneCard';
import Footer from './components/Footer';

const DayOne = () => {
    return (
        <>
        <Header/>
        <br/><br/><br/>
        <div class="notice"><img alt="notice"src={SevenDaysNotice} /></div>
        <br/><br/><br/>
        <div id = "container">
            <div className = "body-content">
            <DayOneCard/>
            </div>
        </div>
        <br/><br/>
        <Footer/>
        </>
    );
};

export default DayOne;