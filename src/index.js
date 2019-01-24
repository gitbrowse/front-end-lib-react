import React,{ Component ,PureComponent } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import axios from '@/utils/axios';
Object.assign(PureComponent.prototype, {
    $axios: axios,
})

Object.assign(Component.prototype, {
    $axios: axios,
})


ReactDOM.render(
    <App />,
    document.getElementById('root'));
registerServiceWorker();
