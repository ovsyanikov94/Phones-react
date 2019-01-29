import React from 'react';
import PropTypes from 'prop-types';

class SearchComponent extends React.Component {

  constructor(props){

      super(props);

    console.log(props);

    this.state = {
        onSearchStringChanged : props.onSearchStringChanged
    };


    this.search = this.search.bind( this );

  }//constructor

  search( event ){

      console.log(this);
      this.props.onSearchStringChanged( event.target.value );

  }

  render(){
    return (
        <p>
            Search:
            <input onChange={this.search} />
        </p>
    )
  }
}
SearchComponent.propTypes = {
}

export default SearchComponent;