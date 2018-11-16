import React, { Component } from 'react';
import favicon from '../../../favicon.png';

import './TopNavBar.less';

class TopNavBar extends Component {

    render() {
        return (
            <div className="top-nav-bar">
                <div className="site-info">
                    <img alt='' className="logo" src={favicon}/>
                    <div className="name">前端</div>
                </div>
                <div className="site-links"></div>
            </div>
        );
    }
}

export default TopNavBar;
