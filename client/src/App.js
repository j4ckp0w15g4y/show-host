import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Route, Switch, Redirect} from 'react-router-dom';
import CreateEvent from './components/CreateEvent/CreateEvent'
import ListAllGigs from './components/ListAllGigs/ListAllGigs'
import SubmitFormGenre from './components/SubmitFormGenre/SubmitFormGenre'
import SubmitFormBorough from './components/SubmitFormBorough/SubmitFormBorough'
import Home from './components/Home/Home'
import { get_gigs } from './components/services/services'



class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false,
      genre_form: "",
      borough_form: "",
      renderNewEvent: false
    };
  }

  componentDidMount = async () => {
    const gigs = await get_gigs()
    this.setState({
      apiData: gigs
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

  submitFuncBorough = (e) => {
    this.setState({
      borough_form: e.target.value,
      apiDataLoaded: true 

    })
  }
  
  handleClick = (e) => {
    this.setState({
      renderNewEvent:true,
      genre_form: '',
      borough_form: ''      
    })
  }

  refreshFunc = (e) => {
    this.setState({
      genre_form: '',
      borough_form: ''
    })
  }

funcHere(event){
  const popUp = async (event) => {
    const { name, value } = event.target;
    console.log(value)
    window.open(`${value}`);
    
  }
}

 showGigsOnPage() {        
    return this.state.apiData.map((gig) => {
      if(gig.genre == this.state.genre_form || gig.borough == this.state.borough_form) {
        return (
          <div className="render-gig">
            
          <h2 className="gig-info title" >Name: {gig.name}</h2>
            <p className="gig-info">Date: {gig.date}</p>
            <div className="gig-info">Genre: {gig.genre}</div>
            <div className="gig-info">Borough: {gig.borough}</div>
            <p className="gig-info">Event info: {gig.event_info}</p>
            <a className="gig-link" href={gig.tickets_url} onClick={(e) => this.funcHere(e)} rel="noopener noreferrer" target="_blank">Link to tickets here</a>
            <img className="gig-image" src={gig.image_url} />
          </div>
        );        
      }          
    });
  }  

  render() {
    const { apiData, genre_form, borough_form } = this.state;
     
    return (
      <div className="App">                  
          <Header submitFuncBorough = {this.submitFuncBorough} refreshFunc = {this.refreshFunc} submitFuncGenre = {this.submitFuncGenre} showAllGigs={this.showAllGigs} handleClick={this.handleClick}/>
          {this.state.renderNewEvent &&
          <Route exact path="/create-event" render={ () => <CreateEvent appendEventFunc = {this.appendEventFunc}/>}/>}
          <Route exact path="/" render={ () => <Home />}/>
          <Route exact path="/all-gigs" component={ListAllGigs}/>
          <div className="show-gigs-by">
          {(this.state.apiDataLoaded) ? this.showGigsOnPage() : <h1 className="body-text"></h1>}
          </div>
        <Footer />
        </div>
    );
  }
}

export default App;