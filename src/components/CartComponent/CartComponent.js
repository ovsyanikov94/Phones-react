import React, {Component} from 'react';
import CartService from "../../services/CartService";

class CartComponent extends Component {

   constructor(props){
    super(props);

    this.cartService = CartService;

  }//constructor

  render(){

    let cart = this.cartService.getCart();

    let items = cart.map( p =>
        <li key={p.id}>{p.name} ({p.amount}) <span style={
            {
                color: 'red',
                cursor: 'pointer'
            }
        } onClick={this.removeFromCart.bind( this , p.id)}>X</span></li>
    );

    if( items.length === 0 ){
        items = <span>Empty cart!</span>;
    }//if

    return (
        <section>
            <p>Shopping Cart</p>
            <ul>
                {items}
            </ul>
        </section>
    )

  }

  removeFromCart( id ){

       this.props.onRemovePhone( id );

  }//removeFromCart

}

export default CartComponent;