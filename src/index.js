// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import AppComponent from './components/AppComponent/AppComponent';
//
// ReactDOM.render(
//     <AppComponent />,
//     document.getElementById('root')
// );
//



/*

    initialState -> store
    view1 -> Action{ ... } -> reducer( state , action ) -> store
    view2 -> Action{ ... } -> reducer( state , action ) -> store
    view3 -> Action{ ... } -> reducer( state , action ) -> store
    view4 -> Action{ ... } -> reducer( state , action ) -> store
    view5 -> Action{ ... } -> reducer( state , action ) -> store
    view6 -> Action{ ... } -> reducer( state , action ) -> store

 */

///REDUX-BASE

import { createStore } from 'redux';

const initialState = {

    firstName: 'Roman',
    secondName: 'Petrov'

};

//ACTION/ACTION-CREATORS

const CHANGE_FIRST_NAME = 'CHANGE_FIRST_NAME';
const ChangeFirstNameAction = {

    type: CHANGE_FIRST_NAME,
    payload: 'Ivan'

};

const CHANGE_SECOND_NAME = 'CHANGE_SECOND_NAME';
const ChangeSecondNameAction = {

    type: CHANGE_SECOND_NAME,
    payload: 'Ivanov'

};

function RootReducer( state = initialState , action ) {

    switch ( action.type ) {

        case CHANGE_FIRST_NAME:
            return {
                ...state,
                firstName: action.payload
            };

        case CHANGE_SECOND_NAME:
            return {
                ...state,
                secondName: action.payload
            };

    }//switch

    return state;

}//RootReducer

const store = createStore( RootReducer );

console.log( store.getState() );

store.dispatch( ChangeFirstNameAction );

console.log( store.getState() );

store.dispatch( ChangeSecondNameAction );

console.log( store.getState() );

// RootReducer( store.getState() , ChangeSecondNameAction );