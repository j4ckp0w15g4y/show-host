import React, { Component } from 'react';
import { get_gigs, delete_gig, update_gig } from '../services/services'
import './ListAllGigs.css'

   

  
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
        const deleteGig = await delete_gig(id)
         const gigs = await get_gigs()
       this.setState({
         apiData: gigs
       })  
    }  

    showModal = (e) => {
      console.log(e.target.id)
      const id = e.target.id;
      this.setState({
        show: true,
        id: id
      })
    }

    hideModal = (e) => {
      this.setState({
        show: false
      })
    }

    handleFormChange = async (e) => {
        e.preventDefault();
        const element = e.target
       const name = element.name
       let value = element.value

       const newState = {}
       newState[name] = value

       this.setState(newState)
    }


  updateEventSubmit = async (e) => {
        e.preventDefault();
        const { name, date, borough, genre, event_info, tickets_url, image_url, id } = this.state
        const updatedEvent = {
              name: name, 
                date: date, 
                borough: borough,
                genre: genre,
                event_info: event_info,
                tickets_url: tickets_url,
                image_url: image_url
        }

        // console.log(updatedEvent);
       const eventCreated = await update_gig(id, updatedEvent)  

       const gigs = await get_gigs()
       this.setState({
         apiData: gigs
       })      
        this.hideModal()
        

    }


   

      showAllGigs(){
        return this.state.apiData.map((gig) => {
          return (
            <div className="gig column is-one-third" >
            <h2 className="gig-info title" >Name: {gig.name}</h2>
              <img className="image " src={gig.image_url} />
              <p className="gig-info subtitle">Date: {gig.date}</p>
              <div className="gig-info">Genre: {gig.genre}</div>
              <div className="gig-info">Borough: {gig.borough}</div>
              <p className="gig-info">Event info: {gig.event_info}</p>
              <a className="gig-link" href={gig.tickets_url} rel="noopener noreferrer" target="_blank">Link to tickets here</a>
              <button className="update-button " id={gig.id} onClick={this.showModal}>Update</button>
              <button className="delete-button" id={gig.id} onClick={(e) => this.handleDelete(e)}>Delete</button>
            </div>
          );     
        })
      }    
  
    render() {
      const { name, date, borough, genre, event_info, tickets_url, image_url } = this.state
      const modal = (this.state.show) ? 
      <div 
        className="modal is-active">
        <section className="modal-content">
         <form  onSubmit={this.updateEventSubmit}>
                    <label>Name</label>
                    <input type='text' name="name" onChange={this.handleFormChange} placeholder="e.g. Rock Show"/>
                    <label>Date</label>
                    <input type='text' name="date" onChange={this.handleFormChange}placeholder="mm/dd/yyyy"/>
                    <label>Borough</label>
                    <input type='text' name="borough" onChange={this.handleFormChange} placeholder="e.g. Manhattan"/>
                    <label>Genre</label>
                    <input type='text' name="genre" onChange={this.handleFormChange} placeholder="e.g. Rock"/>
                    <label>Event Info</label>
                    <input type='text' name="event_info" onChange={this.handleFormChange}/>
                    <label>Ticket URL</label>
                    <input type='text' name="tickets_url" onChange={this.handleFormChange}/>
                    <label>Image URL</label>
                    <input type='text' name="image_url" onChange={this.handleFormChange}/>
                    <button type="submit">Update</button> 
                    {/* <Link to='/'>Back</Link>                    */}
                </form>
                <button onClick={this.hideModal}>Close</button>
                </section>
                </div> : null;

        return (
            <div className="columns" id="list-all-gigs">
             {(this.state.apiDataLoaded) ? this.showAllGigs() : <p>Loading...</p>}
             {modal}

            </div>
        );
    }
}

export default ListAllGigs;