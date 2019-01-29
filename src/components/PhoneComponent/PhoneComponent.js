import React, {Component} from 'react';

import {Link} from "react-router-dom";

class PhoneComponent extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
        <li className="thumbnail">
            <Link to={`phone/${this.props.phone.id}`}  className="thumb">
                <img alt={this.props.phone.name}
                     src={this.props.phone.imageUrl} />
            </Link>

            <div className="phones__btn-buy-wrapper">
                <a className="btn btn-success">
                    Add
                </a>
            </div>

            <Link to={`phone/${this.props.phone.id}`}>{this.props.phone.name}</Link>
            <p>{this.props.phone.snippet}</p>
        </li>
    )
  }//render

}//PhoneComponent


export default PhoneComponent;