import React, { Component } from 'react';

class SubmitFormLocation extends Component {
    render() {
        return (
            <div className="select is-rounded is-small is-right">
                     <form>
                    <select type="text" onChange={this.props.submitFuncLocation} value={this.props.location_form}>
                        <option value=''></option>
                        <option value="The Bronx">The Bronx</option>
                        <option value="Queens">Queens</option>
                        <option value="Manhattan">Manhattan</option>
                        <option value="Brooklyn">Brooklyn</option>
                        <option value="Staten Island">Staten Island</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default SubmitFormLocation;