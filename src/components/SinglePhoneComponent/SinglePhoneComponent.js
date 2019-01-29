import React from "react";
import PhoneService from "../../services/PhoneService";

let params = {

    f1: 1,
    f2: 1,
    f3: 1,
    f4: 1,
    f5: 1,
    f6: 9,
    f7: 1,

};

function Test( { f1 , f6 } ) {

    console.log(f1,f6)

}

Test(params);

class SinglePhoneComponent extends React.Component{

    constructor( { match , props} ) {
        super(props);

        this.state = {
            phone: {}
        };

        this.phoneService = new PhoneService();
        this.phoneService
            .GetPhones(`/phones/${match.params.id}.json`)
            .then( this.loadPhone.bind ( this ) );
        ;

    }//constructor

    loadPhone( phone ){

        this.setState({
            phone: phone
        });

    }//loadPhone

    render(){

        return (
            <h2>Hello!</h2>
        );

    }//render

}

export default SinglePhoneComponent;