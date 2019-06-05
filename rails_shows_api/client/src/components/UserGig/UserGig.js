import React, { Component } from 'react';
import { get_user_gigs } from '../services/services'

class UserGig extends Component {
    constructor() {
        super()
        this.state = {
            gigs: []
        }
    }

    componentDidMount = async () => {
        const allGigs = await get_user_gigs(1)
        this.setState({
            gigs: allGigs
        })
    }


    render() {
        let allGigs = this.state.gigs.map(gig => {
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
            )
        })
        return (
            <div>
                {allGigs}
            </div>
        );
    }
}

export default UserGig;
