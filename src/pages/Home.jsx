import React, { Component } from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginRegister from './components/LoginRegister';
import MainContent from './components/MainContent';
import './Home.css';


class Home extends Component {
  render() {
    return (
      <>
        <Header/>
      <div className="LoginRegister">
        <LoginRegister/>
      </div>
      <div className="MainContent">
        <MainContent/>
      </div>
      </>
    );
  }
}
           
export default Home;