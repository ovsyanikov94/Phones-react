import React, {Component} from 'react';

import {Link} from "react-router-dom";

class PhoneComponent extends Component {

  constructor(props){

    super(props);

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

                !this.props.isInCart && <div className="phones__btn-buy-wrapper">
                    <span className="btn btn-success" onClick={this.addPhone.bind(this)}>
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