import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
    render(){

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <Link className='nav-link' to='/'>
                Home
              </Link>
                </li>
                <li className="nav-item">
                <Link className='nav-link' to='/random'>
                Random
              </Link>
                </li>
        
              </ul>
              
            </div>
          </nav>
          );
    }
  
}

export default Navbar;