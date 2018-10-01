import React from 'react';
import ReactDOM from 'react-dom';
import 'popper.js';
import 'jquery'
import 'bootstrap'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
