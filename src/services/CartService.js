// class CartService{
//
//     constructor(){
//
//         this.cart = this.getCart();
//
//     }//constructor
//
//     addPhone( phone ) {
//
//         let cart = this.getCart();
//
//         if(cart.length === 0){
//
//             localStorage.setItem('cart' , JSON.stringify([
//                 {
//                     id: phone.age,
//                     amount: 1,
//                     name: phone.name
//                 }
//             ]));
//
//         }//if
//         else{
//
//             let phoneCheck = cart.find(
//                 p => p.id === phone.age
//             );
//
//             if( !phoneCheck ){
//
//                 cart.push(
//                     {
//                         id: phone.age,
//                         amount: 1,
//                         name: phone.name
//                     }
//                 );
//
//                 localStorage.setItem('cart' , JSON.stringify( cart ));
//
//             }//if
//
//         }//else
//
//     }//addPhone
//
//     getCart(){
//
//         try{
//
//             let cart = JSON.parse(
//                 localStorage.getItem('cart')
//             );
//
//             return cart || [];
//
//         }//try
//         catch(ex){
//
//             console.log('EXCEPTION!' , ex);
//
//             return [];
//         }//catch
//
//
//
//     }//getCart
//
//     isInCart( id ){
//
//         let cart = this.getCart();
//
//         return cart.find( p => p.id === id );
//
//     }//isInCart
//
//     removePhone( id ){
//
//         let newCart = this.getCart().filter( p => +p.id !== +id );
//
//         localStorage.setItem('cart' , JSON.stringify(newCart) );
//
//     }//removePhone
//
// }//CartService

class CartService{

    _cart;

    addPhone( phone ) {

        let item =  {
            id: phone.age,
            amount: 1,
            name: phone.name
        };

        if(this._cart.length === 0){

            phone.isInCart = true;

            this._cart.push(item);

            console.log('Hello!');

            localStorage.setItem('cart' , JSON.stringify( this._cart ));

        }//if
        else{

            let phoneCheck = this._cart.find(
                p => p.id === phone.age
            );

            if( !phoneCheck ){

                phone.isInCart = true;

                this._cart.push( item );

                localStorage.setItem('cart' , JSON.stringify( this._cart ));

            }//if

        }//else

    }//addPhone

    getCart(){

        console.log('GET CART!');
        
        //debugger;

        try{

            if( this._cart ){
                return this._cart;
            }//if

            this._cart = JSON.parse(
                localStorage.getItem('cart')
            );

            if(!this._cart){
                this._cart = [];
            }//if

            return this._cart;

        }//try
        catch(ex){

            console.log('EXCEPTION!' , ex);
            this._cart = [];
            return this._cart;

        }//catch



    }//getCart

    isInCart( id ){

        return this._cart.find( p => p.id === id );

    }//isInCart

    removePhone( id ){

        let phone = this._cart.find(p => +p.id === +id);
        let index = this._cart.indexOf( phone );
        this._cart.splice( index , 1 ) ;

        localStorage.setItem('cart' , JSON.stringify(this._cart) );

    }//removePhone

    //================ SINGLETON PART ================ //

    static _cartService;

    static getInstance(){

        if(!CartService._cartService){

            CartService._cartService = new CartService();
            CartService._cartService.getCart();

        }//if

        return CartService._cartService;

    }//getInstance

};


let serviceSingleton = CartService.getInstance();
export default serviceSingleton; // export default new CartService();