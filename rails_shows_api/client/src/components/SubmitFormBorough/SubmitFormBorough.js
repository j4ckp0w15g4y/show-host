import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SubmitFormBorough extends Component {
    render() {
        return (
           <Link to="show-gigs"> <div className="select is-rounded is-small is-right">
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
            </Link>
        );
    }
}

export default SubmitFormBorough;