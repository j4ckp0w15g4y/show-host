import React, { Component } from 'react';
import SubmitFormGenre from "../SubmitFormGenre/SubmitFormGenre"
import SubmitFormLocation from "../SubmitFormLocation/SubmitFormLocation"
import { Link } from 'react-router-dom'



class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to='/'><h1 className="showhost-hero">ShowHost</h1></Link>
            <nav className="navbar is-black" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">  
            {/* <a onClick={this.props.showAllGigs}>Show All Gigs</a>          */}
             <h3>Select Genre: <SubmitFormGenre submitFuncGenre = {this.props.submitFuncGenre}/> </h3>   
              <h3>Select Borough: <SubmitFormLocation submitFuncLocation = {this.props.submitFuncLocation} /></h3>
              <Link to='/create-event'>Add New Event</Link>  
              


                </div>
                </nav>
            </div>
        );
    }
}

export default Header;