import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import SevenDayNotice from './pageimg/SevenDayNotice.png';
import './SevenDays.css';


const SevenDays = () => {
    return (
        <>
        <Header/>
        <br/><br/><br/>
        <div class="notice"><img alt="notice"src={SevenDayNotice} /></div>
        <br/><br/><br/>
        </>
    );
};

export default SevenDays;