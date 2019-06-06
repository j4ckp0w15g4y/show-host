import React, { Component } from 'react';
import SubmitFormGenre from "../SubmitFormGenre/SubmitFormGenre"
import SubmitFormBorough from "../SubmitFormBorough/SubmitFormBorough"
import { Link } from 'react-router-dom'
import './Header.css'



class Header extends Component {
    render() {
        return (
            <div className="header">      
            <div >
            <Link onClick={this.props.refreshFunc} className="hero is-black" style={{ textDecoration: 'none', color: 'white' }} to='/'><h1>ShowHost</h1></Link>
            </div>
            <nav className="navbar is-black" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">  
            </div>
            <div className="nav-options">
            <ul className="header-nav">

           <li> <Link to="/all-gigs" onClick={this.props.refreshFunc} className="header-decoration">List All Gigs</Link></li>
            {/* <Link to='/user'>User's Shows</Link> */}
             <li>Select Genre: <SubmitFormGenre submitFuncGenre = {this.props.submitFuncGenre}/> </li>   
              <li>Select Borough: <SubmitFormBorough submitFuncBorough = {this.props.submitFuncBorough} /></li>
              <li><Link onClick={this.props.handleClick} className="header-decoration" to='/create-event'>Add New Event</Link> </li> 
              </ul>
              </div>              
               </nav>
            </div>
        );
    }
}

export default Header;