import React, { Component } from 'react';

class SubmitFormBorough extends Component {
    render() {
        return (
            <div className="select is-rounded is-small is-right">
                     <form>
                    <select type="text" onChange={this.props.submitFuncBorough} value={this.props.borough_form}>
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

export default SubmitFormBorough;