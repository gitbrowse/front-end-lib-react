import React, { PureComponent } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import PullToRefresh from "../pull-to-refresh/pull-to-refresh";
import ListView from "../list-view/list-view";
import RollLoad from "../roll-load/roll-load";

import 'antd-mobile/dist/antd-mobile.css';

export default class Index extends PureComponent{
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/app/pull-to-refresh" component={PullToRefresh} />
                    <Route path="/app/list-view" component={ListView} />
                    <Route path="/app/roll-load" component={RollLoad} />
                    <Route path="/app/ajax"/>
                    <Redirect to="/app/pull-to-refresh" />
                </Switch>
            </div>
        )
    }
}
