import React, { useState } from 'react';
import { Badge, Button, Dropdown, Layout, Menu, Tooltip } from 'antd';
import style from './Layout.module.css';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    BarChartOutlined,
    AppstoreOutlined,
    UserOutlined,
    ContactsOutlined,
    InboxOutlined,
    UserSwitchOutlined,
    WalletOutlined,
    SettingOutlined,
    BellOutlined,
    DownOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const dropDownMenu = (
    <Menu style={{ marginLeft: '20px' }}>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
);

const LayoutComponent = ({ children }) => {

    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed)
    };

    return (
        <Layout id='mainLayout'>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">logo</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<BarChartOutlined />}>
                        Analytics
                    </Menu.Item>
                    <Menu.Item key="2" icon={<AppstoreOutlined />}>
                        Workflows
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UserOutlined />}>
                        Account
                    </Menu.Item>
                    <Menu.Item key="4" icon={<ContactsOutlined />}>
                        Contacts
                    </Menu.Item>
                    <Menu.Item key="5" icon={<InboxOutlined />}>
                        Inbox
                    </Menu.Item>
                    <Menu.Item key="6" icon={<UserSwitchOutlined />}>
                        Admin
                    </Menu.Item>
                    <Menu.Item key="7" icon={<WalletOutlined />}>
                        Biling
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    <div className="d-flex-space-between">
                        {collapsed ? <MenuUnfoldOutlined className='trigger' onClick={() => toggle()} /> : <MenuFoldOutlined className='trigger' onClick={() => toggle()} />}
                        <div className={style.headerLeft}>
                            <Tooltip title="settings">
                                <Button type="primary" shape="circle" size='large' icon={<SettingOutlined />} />
                            </Tooltip>
                            <Tooltip title="notifications">
                                <Badge count={1} offset={[-10, 5]}>
                                    <Button type="primary" shape="circle" size='large' icon={<BellOutlined />} />
                                </Badge>
                            </Tooltip>


                            <Dropdown overlay={dropDownMenu} trigger={['click']}>
                                <a className={`ant-dropdown-link ${style.profile}`} onClick={e => e.preventDefault()}>
                                    <img src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" alt="profile image" />
                                    <div className={style.profileDesc}>
                                        <h4>Nevo David</h4>
                                        <span>Master Account</span>
                                    </div>
                                    <DownOutlined />
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default LayoutComponent;