import React, {Component} from 'react';

import {Link} from "react-router-dom";
import CartService from "../../services/CartService";

class PhoneComponent extends Component {

  constructor(props){

    super(props);
    this.cartService = CartService;

  }

  addPhone(  ){

      this.props.onAddPhone( this.props.phone );

      this.setState({
          isInCart: true
      });

  }//addPhone

  render(){
    return (
        <li className="thumbnail">
            <Link to={`phone/${this.props.phone.id}`}  className="thumb">
                <img alt={this.props.phone.name}
                     src={this.props.phone.imageUrl} />
            </Link>
            {(

                !this.props.phone.isInCart && <div className="phones__btn-buy-wrapper">
                    <span className="btn btn-success" onClick={
                        this.cartService.addPhone.bind(this.cartService , this.props.phone)
                    }>
                        Add
                    </span>
                </div>

            )}


            <Link to={`phone/${this.props.phone.id}`}>{this.props.phone.name}</Link>
            <p>{this.props.phone.snippet}</p>
        </li>
    )
  }//render

}//PhoneComponent


export default PhoneComponent;