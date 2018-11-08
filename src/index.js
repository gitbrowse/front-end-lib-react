import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux';
// import counter from './reducers/counter';
//
// const store = createStore(counter);



ReactDOM.render(
    <App />,
    document.getElementById('root'));
registerServiceWorker();
