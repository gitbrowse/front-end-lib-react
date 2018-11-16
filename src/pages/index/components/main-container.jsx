import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import baseContainer from '../../../containers/base.container'
import PullToRefresh from '../../pullToRefresh/pullToRefresh'
import ListView from '../../listview/listview'
import WebSocket from '../../webSocket/webSocket'
import Test from '../../test/test'
import Redux from '../../redux/redux'

class MainContainer extends React.Component {

    render() {
        return (
            <Switch>
                <Route path="/web/webSocket" component={WebSocket} />
                <Route path="/web/test" component={Test} />
                <Route path="/web/pullToRefresh" component={PullToRefresh} />
                <Route path="/web/ListView" component={ListView} />
                <Route path="/web/redux" component={baseContainer(Redux)} />
                <Redirect to="/web/pullToRefresh" />
            </Switch>
        )
    }
}

export default MainContainer;
