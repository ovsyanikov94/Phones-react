import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CartComponent extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
        <section>
            <p>Shopping Cart</p>
            <ul>
                <li>Phone 1</li>
                <li>Phone 2</li>
                <li>Phone 3</li>
            </ul>
        </section>
    )
  }
}
CartComponent.propTypes = {
}

export default CartComponent;