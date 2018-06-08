import  React from 'react';
import { render } from 'react-dom';
import App from './App';

import getFrameworks from "./frameworks";

getFrameworks().then(frameworks => {
    render(<App frameworks={frameworks} />, document.querySelector('#root'));
})
