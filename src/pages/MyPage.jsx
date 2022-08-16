import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyPage.css';
import Toast from './components/Toast';
import Tab from './components/Tab';
import InputSample from './components/InputSample';

class MyPage extends Component {
  render() {
    return (
      <>
        <Header/>
    <div>
      <Toast/>
      </div>
      <br/><br/>
      <br></br>
      <div id="Container">
        <div id="body-content">
        <Tab/>
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
           
export default MyPage;