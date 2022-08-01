import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContent from './components/MainContent';
import Toast from './components/Toast';
import './LoginedHome.css';


class Home extends Component {
  render() {
    return (
      <>
        <Header/>
      <div>
      <Toast/>
      </div>
      
      <br/><br/>
      <div id="Container">
        <div id="body-content">
        <MainContent/>
        </div>
      </div>
      
      <br></br>
      <div className="footer">
        <Footer/>
      </div>
      </>
    );
  }
}
           
export default Home;