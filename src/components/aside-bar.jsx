import React from 'react'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'


import './aside-bar.less'
import 'antd/lib/menu/style/css';
import 'antd/lib/icon/style/css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class AsideBar extends React.Component {
    handleClick = (e) => {
        console.log('click ', e);
    }

    render() {
        return (
            <div className="aside-bar">
                <Menu
                    theme="dark"
                    onClick={this.handleClick}
                    style={{ width: 200}}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <SubMenu key="1" title={<span><Icon type="appstore" /><span>功能</span></span>}>
                        <Menu.Item key="1-1">
                            <Link to={{pathname: '/webSocket'}}>
                                webSocket
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="1-2">
                            <Link to={{pathname: '/redux'}}>
                                redux
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="2" title={<span><Icon type="setting" /><span>文档</span></span>}>
                        <Menu.Item key="2-1">
                            <Link to={{pathname: '/test'}}>
                                测试
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="3" title={<span><Icon type="setting" /><span>组件</span></span>}>
                        <Menu.Item key="3-1">
                            <Link to={{pathname: '/pullToRefresh'}}>
                                pullTORefresh
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3-2">
                            <Link to={{pathname: '/listView'}}>
                                listView
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}
