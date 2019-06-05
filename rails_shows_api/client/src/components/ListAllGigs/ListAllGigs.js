import React, { Component } from 'react';
import { get_gigs } from '../services/services'
import { delete_gig } from '../services/services'
   

  
class ListAllGigs extends Component {
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
        const gigs = await get_gigs()
        this.setState({
          apiData: gigs,
          apiDataLoaded: true
        })
      }

       handleDelete = async (e, index) => {
        e.preventDefault();
        const gigs = await delete_gig(index)
        const { apiData } = this.state
        apiData.splice(index, 1)
        await this.setState({
            apiData
          })
    }

      showAllGigs(){
        return this.state.apiData.map((gig,index) => {
          return (
            <div>
            <h2 className="gig-info" >Name: {gig.name}</h2>
              <p className="gig-info">Date: {gig.date}</p>
              <div className="gig-info">Genre: {gig.genre}</div>
              <div className="gig-info">Location: {gig.location}</div>
              <p className="gig-info">Event info: {gig.event_info}</p>
              <a className="gig-link" href={gig.tickets_url} rel="noopener noreferrer" target="_blank">Link to tickets here</a>
              <img className="gig-image" src={gig.image_url} />
              <button className="delete-button" onClick={(e) => this.handleDelete(e,index)}>DELETE</button>
            </div>
          );     
        })
      }    
  
    render() {
        return (
            <div>
             {(this.state.apiDataLoaded) ? this.showAllGigs() : <p>Loading...</p>}

            </div>
        );
    }
}

export default ListAllGigs;