import React from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { createStore } from 'redux'
import PropTypes from "prop-types";

import PullToRefresh from '../pages/pullToRefresh/pullToRefresh'
import ListView from '../pages/listview/listview'
import WebSocket from '../pages/webSocket/webSocket'
import Test from '../pages/test/test'
import Redux from '../pages/redux/redux'

class MainContainer extends React.Component {

    render() {
        return (
            <Switch>
                <Route path="/webSocket" component={WebSocket} />
                <Route path="/test" component={Test} />
                <Route path="/pullToRefresh" component={PullToRefresh} />
                <Route path="/ListView" component={ListView} />
                <Route path="/redux" component={Redux} />
                <Redirect to="/pullToRefresh" />
            </Switch>
        )
    }
}
// MainContainer = connect((state) => ({
//     counter: state.counter
// }))(MainContainer);

export default MainContainer;
