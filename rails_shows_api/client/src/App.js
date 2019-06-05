import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Route, Switch} from 'react-router-dom';
import CreateEvent from './components/CreateEvent/CreateEvent'
import ListAllGigs from './components/ListAllGigs/ListAllGigs'
// import UserGig from './components/UserGig/UserGig'


import { get_gigs } from './components/services/services'

// import Home from './components/Home/Home'


class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false,
      genre_form: "",
      location_form: "",
      renderNewEvent: false
    };
  }

  componentDidMount = async () => {
    const gigs = await get_gigs()
    this.setState({
      apiData: gigs,
    })
  }

  appendEventFunc = async (e) => {
    const { apiData } = this.state
    apiData.unshift(e)
    await this.setState({
      apiData: apiData
    })
  }

  submitFuncGenre = (e) => {    
    this.setState({
      genre_form: e.target.value,
      apiDataLoaded: true 

    })
  }

  submitFuncLocation = (e) => {
    this.setState({
      location_form: e.target.value,
      apiDataLoaded: true 

    })
  }
  
  handleClick = (e) => {
    this.setState({
      renderNewEvent:true,
      genre_form: '',
      location_form: ''      
    })
  }

  refreshFunc = (e) => {
    this.setState({
      genre_form: '',
      location_form: ''
    })
  }



  showGigsOnPage() {
    return this.state.apiData.map((gig) => {
      if(gig.genre == this.state.genre_form || gig.location == this.state.location_form) {
        return (
          <div>
            
          <h2 className="gig-info" >Name: {gig.name}</h2>
            <p className="gig-info">Date: {gig.date}</p>
            <div className="gig-info">Genre: {gig.genre}</div>
            <div className="gig-info">Location: {gig.location}</div>
            <p className="gig-info">Event info: {gig.event_info}</p>
            <a className="gig-link" href={gig.tickets_url} rel="noopener noreferrer" target="_blank">Link to tickets here</a>
            <img className="gig-image" src={gig.image_url} />
          </div>
        );        
      }          
    });
  }

  render() {
    console.log(this.state.genre_form)
    console.log(this.state.location_form)
    console.log(this.state.apiData)
    return (
      <div className="App">                  
          <Header submitFuncLocation = {this.submitFuncLocation} refreshFunc = {this.refreshFunc} submitFuncGenre = {this.submitFuncGenre} showAllGigs={this.showAllGigs} handleClick={this.handleClick}/>
          {this.state.renderNewEvent &&
          <Route exact path="/create-event" render={ () => <CreateEvent appendEventFunc = {this.appendEventFunc}/>}/>}
          {/* <Route exact path='/user' component={UserGig} /> */}


          <Route exact path="/all-gigs" component={ListAllGigs} />
          {(this.state.apiDataLoaded) ? this.showGigsOnPage() : <h1> Local artists doing artist stuff</h1>}
          {/* <Route exact path="/" component={App}/> */}

          
        <Footer />
        </div>
    );
  }
}

export default App;