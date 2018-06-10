import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Code to connect Redux with React
import {createStore} from 'redux';
import reducer from './store/reducer';
import {Provider} from 'react-redux';

// Redux Store
const store = createStore(reducer);

// Passed to the React components using the Provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
