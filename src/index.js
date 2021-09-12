import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
//import Controller from './screens/Controller';
import HomePage from './screens/home/Home';


ReactDOM.render(
<HomePage />, document.getElementById('root'));
registerServiceWorker();
