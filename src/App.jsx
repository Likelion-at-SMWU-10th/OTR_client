import React, { Component } from 'react';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginRegister from './Components/LoginRegister';
import MainContent from './Components/MainContent';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <div className="App">
        <Header/>
      </div>
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
           
export default App;