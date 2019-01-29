import React from 'react';
import ReactDOM from 'react-dom';

import AppComponent from './components/AppComponent/AppComponent';


import PhoneService from './services/PhoneService';

let phoneService = new PhoneService();

ReactDOM.render(
    <AppComponent />,
    document.getElementById('root')
);
