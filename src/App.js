import React, { Component } from 'react';
import TopNavBar from './components/TopNavBar';
// import { createStore } from 'redux'
// import counter from './reducers/counter';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AsideBar from './components/aside-bar';
import MainContainer from './components/main-container';


import './App.less';

class App extends Component {

    // static childContextTypes = {
    //     themeColor: PropTypes.string
    // }
    // getChildContext () {
    //     return { themeColor: this.state.themeColor }
    // }

    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id="app" className="app-container">
                <TopNavBar></TopNavBar>
                <div className="section">
                    <AsideBar></AsideBar>
                    <MainContainer></MainContainer>
                </div>
            </div>
        );
    }
}

// App = connect((state) => ({
//     counter: state.counter
// }))(App);


export default App;
