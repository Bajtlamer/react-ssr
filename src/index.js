import  React from 'react';
import { render } from 'react-dom';
import App from './App';

import getFrameworks from "./frameworks";

// getFrameworks().then(frameworks => {
    render(<App frameworks={getFrameworks()} />, document.querySelector('#root'));
// })
