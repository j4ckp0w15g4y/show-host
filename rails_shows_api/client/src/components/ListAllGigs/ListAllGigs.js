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
          borough_form: "", 
          show: false
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
        // e.preventDefault();
         let id = e.target.id;
         console.log(id)
        const gigs = await delete_gig(id)
        const { apiData } = this.state
        apiData.splice(index, 1)
         this.setState({
            apiData
       })
    }  

      showAllGigs(){
        return this.state.apiData.map((gig,) => {
          return (
            <div className="gig column is-one-third" >
            <h2 className="gig-info title" >Name: {gig.name}</h2>
              <img className="image " src={gig.image_url} />
              <p className="gig-info subtitle">Date: {gig.date}</p>
              <div className="gig-info">Genre: {gig.genre}</div>
              <div className="gig-info">Borough: {gig.borough}</div>
              <p className="gig-info">Event info: {gig.event_info}</p>
              <a className="gig-link" href={gig.tickets_url} rel="noopener noreferrer" target="_blank">Link to tickets here</a>
              <button className="update-button" id={gig.id}>Update</button>
              <button className="delete-button" id={gig.id} onClick={(e) => this.handleDelete(e)}>Delete</button>
            </div>
          );     
        })
      }    
  
    render() {
      const modal = (this.state.show) ? 
      <div 
        className="modal">
        <section className="modal-content">
        
        return (
            <div className="columns" id="list-all-gigs">
             {(this.state.apiDataLoaded) ? this.showAllGigs() : <p>Loading...</p>}

            </div>
        );
    }
}

export default ListAllGigs;