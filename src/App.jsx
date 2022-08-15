import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import AboutOtr from './pages/AboutOtr';
import SevenDays from './pages/SevenDays';
import LoginPage from './pages/LoginPage';
import DayOne from './pages/DayOne';
import DayTwo from './pages/DayTwo';
import DayThree from './pages/DayThree';
import DayFour from './pages/DayFour';
import DayFive from './pages/DayFive';
import DaySix from './pages/DaySix';
import DaySeven from './pages/DaySeven';
import LoginedHome from './pages/LoginedHome';
import CreatingPage from './pages/CreatingPage';
import MyPage from './pages/MyPage';
import SignUpPage from './pages/SignUpPage';
import SignedUpPage from './pages/SignedUpPage';

class App extends Component {
  render() {
    return (
      <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/details" element={<AboutOtr/>}></Route>
        <Route path="/sevendays" element={<SevenDays/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/dayone" element={<DayOne/>}></Route>
        <Route path="/daytwo" element={<DayTwo/>}></Route>
        <Route path="/daythree" element={<DayThree/>}></Route>
        <Route path="/dayfour" element={<DayFour/>}></Route>
        <Route path="/dayfive" element={<DayFive/>}></Route>
        <Route path="/daysix" element={<DaySix/>}></Route>
        <Route path="/dayseven" element={<DaySeven/>}></Route>
        <Route path="/loginedHome" element={<LoginedHome/>}></Route>
        <Route path="/creatingpage" element={<CreatingPage/>}></Route>
        <Route path="/mypage" element={<MyPage/>}></Route>
        <Route path="/signup" element={<SignUpPage/>}></Route>
        <Route path="/signedup" element={<SignedUpPage/>}></Route>
      </Routes>
      </>
    );
  }
}
           
export default App;