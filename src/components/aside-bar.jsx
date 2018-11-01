import React from 'react'
import { Menu, Icon } from 'antd';

import './aside-bar.less'
import 'antd/lib/menu/style/css';
import 'antd/lib/icon/style/css';

// export default class AsideBar extends React.Component {
//     render() {
//         return (
//             <div className="aside-bar">aside-bar</div>
//         )
//     }
// }

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
                    <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}
