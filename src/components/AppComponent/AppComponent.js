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

class AppComponent extends React.Component{

    constructor( props ){
        super(props);

        this.state = {
            'searchString': ''
        };

    }//constructor

    onSearchStringChanged( str ){

        console.log( str );

    }

    render(){

        return (
            <Router>
                 <div className="container-fluid">
                 <div className="row">
                    <div className="col-md-2">
                        <section>

                            <SearchComponent
                                onSearchStringChanged={
                                    this.onSearchStringChanged
                                } />
                            <SortComponent />
                            <CartComponent />

                        </section>


                    </div>

                    <div className="col-md-10">

                            <Route
                                path="/"
                                exact
                                component={PhoneListComponent}
                                history={{
                                    'string': this.state.searchString
                                }}
                            />
                            <Route path="/phone/:id" component={SinglePhoneComponent} />

                    </div>

                </div>
            </div>
            </Router>
        );

    }//render

}//AppComponent

export default AppComponent;