import 'react-app-polyfill/ie9'
import React from 'react';
import ReactDOM from 'react-dom';
import 'popper.js';
import 'jquery'
import 'bootstrap'
import App from './App';
import './App.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
