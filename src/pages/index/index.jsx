import React, { PureComponent } from 'react'
import TopNavBar from './components/TopNavBar';
import AsideBar from './components/aside-bar';
import MainContainer from './components/main-container';

export default class Index extends PureComponent{
    render() {
        return (
            <div id="app" className="app-container">
                <TopNavBar></TopNavBar>
                <div className="section">
                    <AsideBar></AsideBar>
                    <MainContainer></MainContainer>
                </div>
            </div>
        )
    }
}
