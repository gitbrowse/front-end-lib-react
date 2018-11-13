import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import baseContainer from '../containers/base.container'

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
                <Route path="/redux" component={baseContainer(Redux)} />
                <Redirect to="/pullToRefresh" />
            </Switch>
        )
    }
}

export default MainContainer;
