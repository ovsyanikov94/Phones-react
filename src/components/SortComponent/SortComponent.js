import React, {Component} from 'react';

class SortComponent extends Component {

  constructor(props){

    super(props);

    this.state = {
        value: 'Newest'
    };

    this.onSortTypeChanged = this.onSortTypeChanged.bind(this);

  }//constructor

  render(){
    return (
        <p>
            Sort by:
            <select
                value={this.state.value}
                onChange={this.onSortTypeChanged}
            >
                <option value="Alphabetical">Alphabetical</option>
                <option value="Newest">Newest</option>

            </select>
        </p>
    )
  }//render

  onSortTypeChanged( event ){

      this.setState({
          value: event.target.value
      });

      this.props.onSortTypeChanged( event.target.value );

  }//onSortTypeChanged

}

export default SortComponent;