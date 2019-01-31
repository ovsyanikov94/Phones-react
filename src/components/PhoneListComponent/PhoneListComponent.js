import React, {Component} from 'react';

import PhoneComponent from '../PhoneComponent/PhoneComponent';

import CartService from '../../services/CartService';

class PhoneListComponent extends Component {

  constructor(props){

      super(props);

      this.cartService = CartService;

  }//constructor

  render(){

    const PhonesArray = this.props.phones.map(
        p => <PhoneComponent
            onAddPhone={this.props.onAddPhone}
            isInCart={ this.cartService.isInCart(p.age) }
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