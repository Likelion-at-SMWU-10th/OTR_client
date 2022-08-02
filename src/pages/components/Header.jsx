import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component{
  render(){
    return (
    <>
      <div className="app-header">
        &nbsp;
      </div>
      <div className="app-logo">
        <Link to ="/">
          <img className="app-logo" alt="logo" src="img/Logo.png" />
        </Link>
      </div>
      </>
    )
  }
}
    
export default Header;