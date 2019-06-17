import React, { Component } from 'react';
import { Redirect,Link  } from 'react-router-dom';
import './CreateEvent.css';
import { create_gig } from '../services/services'


class CreateEvent extends Component {
    constructor(props){
        super(props);
        this.state = {
            new_event: {
                name: "", 
                date: "", 
                borough: "",
                genre: "",
                event_info: "",
                tickets_url: "",
                image_url: "",
                isSubmit: false,
                isError: false    
            }             
        }
    }

    createEventSubmit = async (e) => {
        e.preventDefault();
        const newEvent = this.state.new_event
       const eventCreated = await create_gig(newEvent)
        this.setState({
            new_event: {
                name: "", 
                date: "", 
                borough: "",
                genre: "",
                event_info: "",
                tickets_url: "",
                image_url: "",
                isSubmit: false,
                isError: false    
            }  
        })
        this.props.appendEventFunc(eventCreated)
    }
   


    handleFormChange = async (e) => {
        e.preventDefault();
        const { name, value } = e.target;    
        await this.setState(prevState =>({
            new_event: {
                ...prevState.new_event,
                [name]: value,
            }
        }))
    }

     render() {    
        const { name, date,borough,genre, event_info, tickets_url, image_url, isSubmit, isError } = this.state.new_event

        // if(isSubmit === true){ 
        //     return <Redirect to='/'/>
        // } else if (isError === true){            
        //     alert('Incorrect Values')
        // }  

    
        return (
            <div>
                <form className="create-event is-rounded" onSubmit={this.createEventSubmit}>
                    <label>Name:</label>
                    <input name="name" value={name} onChange={this.handleFormChange} placeholder="e.g. Rock Show"/>
                    <label>Date:</label>
                    <input  type="date" name="date" value={date} onChange={this.handleFormChange}placeholder="mm/dd/yyyy"/>
                        {/* figure out type="date" */}
                    <label>Borough:</label>
                    {/* <input name="borough" value={borough} onChange={this.handleFormChange} placeholder="e.g. Manhattan"/> */}
                     <form>
                    <select name="borough" type="text" onChange={this.handleFormChange} value={borough}>
                        <option value=''></option>
                        <option value="The Bronx">The Bronx</option>
                        <option value="Queens">Queens</option>
                        <option value="Manhattan">Manhattan</option>
                        <option value="Brooklyn">Brooklyn</option>
                        <option value="Staten Island">Staten Island</option>
                    </select>
                </form>
                    <label>Genre:</label>
                    {/* <input name="genre" value={genre} onChange={this.handleFormChange} placeholder="e.g. Rock"/> */}
                      <form>
                    <select name="genre" type="text" onChange={this.handleFormChange} value={genre}>
                        <option value=''></option>
                        <option value="Jazz">Jazz</option>
                        <option value="Rock">Rock</option>
                        <option value="Punk">Punk</option>
                        <option value="Hip-hop">Hip-hop</option>
                        <option value="Dance">Dance</option>
                        <option value="Metal">Metal</option>
                    </select>
                </form>
                    <label>Event Info:</label>
                    <input name="event_info" value={event_info} onChange={this.handleFormChange} placeholder="e.g. List set times, line-up"/>
                    <label>Ticket URL:</label>
                    <input name="tickets_url" value={tickets_url} onChange={this.handleFormChange} placeholder="e.g. www.concert.com"/>
                    <label>Image URL:</label>
                    <input name="image_url" value={image_url} onChange={this.handleFormChange} />
                    <button type="submit">Submit</button> 
                    <Link to='/'>Back</Link>
                   
                </form>

            </div>
        );
    }
}

export default CreateEvent;