import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SortComponent extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
        <p>
            Sort by:
            <select>
                <option value="name">Alphabetical</option>
                <option value="age">Newest</option>
            </select>
        </p>
    )
  }
}
SortComponent.propTypes = {
}

export default SortComponent;