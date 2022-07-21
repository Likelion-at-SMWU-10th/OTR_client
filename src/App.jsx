import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import AboutOtr from './pages/AboutOtr';
import WritingPage from './pages/WritingPage';
import LoginPage from './pages/LoginPage';

class App extends Component {
  render() {
    return (
      <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/details" element={<AboutOtr/>}></Route>
        <Route path="/writing" element={<WritingPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>
      </>
    );
  }
}
           
export default App;