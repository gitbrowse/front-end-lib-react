import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import reducer from './reducers/index';

import './App.less';
import WebIndex from "./pages/index/index";
import AppIndex from "./app-pages/index/index";


let store = createStore(reducer);

class App extends Component {

    render() {
        return (
            <Provider store={ store }>
                <Router>
                    <Switch>
                        <Switch>
                            <Route path="/web" component={WebIndex} />
                            <Route path="/app" component={AppIndex} />
                            <Redirect to="/web" />
                        </Switch>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}


export default App;
