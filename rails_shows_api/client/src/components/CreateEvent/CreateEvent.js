import React, { Component } from 'react';
import { Redirect,Link  } from 'react-router-dom';
import './CreateEvent.css';


class CreateEvent extends Component {
    constructor(){
        super();
        this.state = {
            name: "", 
            date: "", 
            location: "",
            genre: "",
            event_info: "",
            tickets_url: "",
            image_url: "",
            isSubmit: false,
            isError: false        
        }
    }
   


    handleFormChange = async (e) => {
        const { name, value } = e.target;    
        await this.setState({ [name]: value });
    }

     render() {    
        const { name, date,location,genre, event_info, tickets_url, image_url, isSubmit, isError } = this.state

        if(isSubmit === true){ 
            return <Redirect to='/'/>
        } else if (isError === true){            
            alert('Incorrect Values')
        }  

    
        return (
            <div>
                <form className="create-event">
                    <label>Name</label>
                    <input name="name" value={name} onChange={this.handleFormChange}/>
                    <label>Date</label>
                    <input name="date" value={date} onChange={this.handleFormChange}/>
                    <label>Location</label>
                    <input name="location" value={location} onChange={this.handleFormChange}/>
                    <label>Genre</label>
                    <input name="genre" value={genre} onChange={this.handleFormChange}/>
                    <label>Event Info</label>
                    <input name="event_info" value={event_info} onChange={this.handleFormChange}/>
                    <label>Ticket URL</label>
                    <input name="tickets_url" value={tickets_url} onChange={this.handleFormChange}/>
                    <label>Image URL</label>
                    <input name="image_url" value={image_url} onChange={this.handleFormChange}/>
                    <button type="submit">Submit</button> 
                    <Link to='/'>Back</Link>
                   
                </form>

            </div>
        );
    }
}

export default CreateEvent;