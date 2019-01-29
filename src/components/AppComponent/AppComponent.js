import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './AppComponent.css';

import PhoneListComponent from '../PhoneListComponent/PhoneListComponent';
import CartComponent from '../CartComponent/CartComponent';
import SearchComponent from '../SearchComponent/SearchComponent';
import SortComponent from '../SortComponent/SortComponent';

import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import SinglePhoneComponent from "../SinglePhoneComponent/SinglePhoneComponent";
import PhoneService from "../../services/PhoneService";
import CartService from "../../services/CartService";

class AppComponent extends React.Component{

    constructor( props ){

        super(props);

        this.phoneService = new PhoneService();
        this.cartService = new CartService();

        this.phoneService
            .GetPhones('phones/phones.json')
            .then( this.loadPhones.bind(this) );
        ;

        this.state = {
            'searchString': '',
            phones: [],
            cart: this.cartService.getCart()
        };

    }//constructor

    loadPhones( response ){

        console.log('RESPONSE: ' , response );

        this.setState({
            phones: response
        });

    }//loadPhones

    async onSearchStringChanged( str ){

        console.log( str );

        try{


            let phones = await this.phoneService.GetPhones('phones/phones.json');

            phones = phones.filter( p => p.name.toLowerCase().indexOf( str.toLowerCase() ) !== -1 );

            this.setState({
                phones: phones
            });

        }//try
        catch(ex){

            console.log('EXCEPTION!' , ex);

        }//catch

    }

    onSortTypeChanged( value ){

        let phones = [];

        if( value === 'Alphabetical' ){

            phones = this.state.phones.sort( ( left , right )=>{

                return left.name > right.name ? 1 : -1;

            } );

        }//if
        else{

            phones = this.state.phones.sort( ( left , right )=>{

                return +left.age > +right.age ? 1 : -1;

            } );

        }//else

        this.setState({
            phones: phones
        });

        console.log('PHONES:' , phones );


    }//onSortTypeChanged

    render(){

        return (
            <Router>
                 <div className="container-fluid">
                 <div className="row">
                    <div className="col-md-2">
                        <section>

                            <SearchComponent
                                onSearchStringChanged={
                                    this.onSearchStringChanged.bind( this )
                                } />

                            <SortComponent
                                onSortTypeChanged={
                                    this.onSortTypeChanged.bind( this )
                                } />

                            <CartComponent
                                cart={this.state.cart}
                                onRemovePhone={ this.onRemovePhone.bind( this ) }
                            />

                        </section>


                    </div>

                    <div className="col-md-10">

                            <Route
                                path="/"
                                exact
                                render={ ()=>
                                    <PhoneListComponent
                                        phones={this.state.phones}
                                        onAddPhone={ this.addPhone.bind(this) }
                                    />
                                }
                            />
                            <Route path="/phone/:id" component={SinglePhoneComponent} />

                    </div>

                </div>
            </div>
            </Router>
        );

    }//render

    addPhone( phone ){

        this.cartService.addPhone( phone );
        this.setState({
            cart: this.cartService.getCart()
        });

    }//addPhone

    onRemovePhone( id ){

        this.cartService.removePhone( id );
        this.setState({
            cart: this.cartService.getCart()
        });

    }//onRemovePhone

}//AppComponent

export default AppComponent;