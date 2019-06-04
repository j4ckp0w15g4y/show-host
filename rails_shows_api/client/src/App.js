import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Route, Switch} from 'react-router-dom';
import CreateEvent from './components/CreateEvent/CreateEvent'

// import Home from './components/Home/Home'


class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false,
      genre_form: "",
      location_form: ""
    };
  }

  componentDidMount = async () => {
    const gigs = await axios.get('http://localhost:4567/gigs');
    const apiData = gigs.data;
    this.setState({
      apiData: apiData,
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
    this.showGigsOnPage();
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
          <Header submitFuncLocation = {this.submitFuncLocation} submitFuncGenre = {this.submitFuncGenre}/>
          <Route exact path="/create-event" component={CreateEvent}/>

          {(this.state.apiDataLoaded) ? this.showGigsOnPage() : <h1> Local artists doing artist stuff</h1>}
          {/* <Route exact path="/" component={App}/> */}

          
        <Footer />
        </div>
    );
  }
}

export default App;