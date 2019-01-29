import React, {Component} from 'react';

import PhoneComponent from '../PhoneComponent/PhoneComponent';
import PhoneService from "../../services/PhoneService";

class PhoneListComponent extends Component {

  constructor(props){

    super(props);

      this.phoneService = new PhoneService();

      console.log(props);

      this.state = {
          phones: []
      };


      this.phoneService
          .GetPhones('phones/phones.json')
          .then( this.loadPhones.bind(this) );
      ;

  }//constructor

  loadPhones( response ){

        console.log(response);

        this.setState({
            phones: response
        });

    }//loadPhones

  render(){

    const PhonesArray = this.state.phones.map(
        p => <PhoneComponent key={p.id} phone={ p } />
    );

    return (
      <ul className="phones">
          {PhonesArray}
      </ul>
    )

  }//render
}

export default PhoneListComponent;