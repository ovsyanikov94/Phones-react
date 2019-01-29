import React, {Component} from 'react';

import PhoneComponent from '../PhoneComponent/PhoneComponent';
import PhoneService from "../../services/PhoneService";

class PhoneListComponent extends Component {

  constructor(props){

      super(props);


  }//constructor

  render(){

    const PhonesArray = this.props.phones.map(
        p => <PhoneComponent
            onAddPhone={this.props.onAddPhone}
            key={p.id}
            phone={ p }
        />
    );

    return (
      <ul className="phones">
          {PhonesArray}
      </ul>
    )

  }//render
}

export default PhoneListComponent;