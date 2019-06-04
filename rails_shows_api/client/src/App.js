import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false,
    };
  }

  componentDidMount = async () => {
    const gigs = await axios.get('http://localhost:4567/gigs');
    const apiData = gigs.data;
    this.setState({
      apiData: apiData,
      apiDataLoaded: true 

    })
  }
  
  



  showGigsOnPage() {
    return this.state.apiData.map((gig) => {
      return (
        <div>
        <h2 className="gig-info" >{gig.name}</h2>
          <p className="gig-info">{gig.date}</p>
          <div className="gig-info">{gig.genre}</div>
          <p className="gig-info">{gig.event_info}</p>
          <a className="gig-link" href={gig.tickets_url}>Link to tickets here</a>
          <img className="gig-image" src={gig.image_url} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          {(this.state.apiDataLoaded) ? this.showGigsOnPage() : <p>Loading...</p>}
        </div>
      </div>
    );
  }
}

export default App;