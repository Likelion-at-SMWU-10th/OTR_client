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
import DayOneSaved from './pages/DayOneSaved';
import DayTwoSaved from './pages/DayTwoSaved';
import DayThreeSaved from './pages/DayThreeSaved';
import DayFourSaved from './pages/DayFourSaved';
import DayFiveSaved from './pages/DayFiveSaved';
import DaySixSaved from './pages/DaySixSaved';
import DaySevenSaved from './pages/DaySevenSaved';
import LoginedHome from './pages/LoginedHome';
import CreatingPage from './pages/CreatingPage';
import CreatingPageSaved1 from './pages/CreatingPageSaved1';
import CreatingPageSaved2 from './pages/CreatingPageSaved2';
import CreatingPageSaved3 from './pages/CreatingPageSaved3';
import MyPage from './pages/MyPage';
import SignUpPage from './pages/SignUpPage';
import SignedUpPage from './pages/SignedUpPage';
import AnswerGet from './pages/AnswerGet';
import AnswerPost from './pages/AnswerPost';
import YuseoGet from './pages/components/YuseoGet';
import TestPage from './pages/TestPage';
import LoginTest from './pages/LoginTest';
import SignupTest from './pages/SignupTest';
import InputTest from './pages/InputTest';

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
        <Route path="/dayonesaved" element={<DayOneSaved/>}></Route>
        <Route path="/daytwosaved" element={<DayTwoSaved/>}></Route>
        <Route path="/daythreesaved" element={<DayThreeSaved/>}></Route>
        <Route path="/dayfoursaved" element={<DayFourSaved/>}></Route>
        <Route path="/dayfivesaved" element={<DayFiveSaved/>}></Route>
        <Route path="/daysixsaved" element={<DaySixSaved/>}></Route>
        <Route path="/daysevensaved" element={<DaySevenSaved/>}></Route>
        <Route path="/loginedHome" element={<LoginedHome/>}></Route>
        <Route path="/creatingpage" element={<CreatingPage/>}></Route>
        <Route path="/creatingpagesaved1" element={<CreatingPageSaved1/>}></Route>
        <Route path="/creatingpagesaved2" element={<CreatingPageSaved2/>}></Route>
        <Route path="/creatingpagesaved3" element={<CreatingPageSaved3/>}></Route>
        <Route path="/mypage" element={<MyPage/>}></Route>
        <Route path="/signup" element={<SignUpPage/>}></Route>
        <Route path="/signedup" element={<SignedUpPage/>}></Route>
        <Route path="/gettest" element={<AnswerGet/>}></Route>
        <Route path="/posttest" element={<AnswerPost/>}></Route>
        <Route path="/getyuseo" element={<YuseoGet/>}></Route>
        <Route path="/testing" element={<TestPage/>}></Route>
        <Route path="/logintest" element={<LoginTest/>}></Route>
        <Route path="/signuptest" element={<SignupTest/>}></Route>
        <Route path="/inputtest" element={<InputTest/>}></Route>
      </Routes>
      </>
    );
  }
}
           
export default App;