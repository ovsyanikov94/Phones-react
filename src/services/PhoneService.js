import CartService from './CartService';


class PhoneService{


    constructor() {
        this.cartService = CartService;
    }

    async GetPhones( path ){

        try{

            let response = await fetch( path );

            response = await response.json();
            console.log(response);

            response.forEach( p => {
                p.isInCart = this.cartService.iInCart( p.age );
            } );

            return response;

        }//try
        catch(ex){

            console.log('Exception!')
            return null;

        }//catch


    }//GetPhones

}//PhoneService

export default PhoneService;