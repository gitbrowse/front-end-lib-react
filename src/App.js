import React, { Component } from 'react';
import TopNavBar from './components/TopNavBar';
import { createStore } from 'redux'
import AsideBar from './components/aside-bar';
import MainContainer from './components/main-container';
import { Provider } from 'react-redux';
import { HashRouter as Router} from 'react-router-dom'
import reducer from './reducers/index';

import './App.less';

let store = createStore(reducer);

class App extends Component {

    render() {
        return (
            <Provider store={ store }>
                <Router>
                    <div id="app" className="app-container">
                        <TopNavBar></TopNavBar>
                        <div className="section">
                            <AsideBar></AsideBar>
                            <MainContainer store={store}></MainContainer>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}


export default App;
