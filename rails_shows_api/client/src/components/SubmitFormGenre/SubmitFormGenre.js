import React, { Component } from 'react';

class SubmitFormGenre extends Component {
    render() {
        return (
            <div className="select is-rounded is-small is-right">            
                <form>
                    <select type="text" onChange={this.props.submitFuncGenre} value={this.props.genre_form}>
                        <option value=''></option>
                        <option value="Jazz">Jazz</option>
                        <option value="Rock">Rock</option>
                        <option value="Punk">Punk</option>
                        <option value="Hip-hop">Hip-hop</option>
                        <option value="Dance">Dance</option>
                        <option value="Metal">Metal</option>
                    </select>
                </form>
                
            </div>
        );
    }
}

export default SubmitFormGenre;