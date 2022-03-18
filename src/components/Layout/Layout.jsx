import React, { useState } from 'react';
import { Badge, Button, Dropdown, Layout, Menu, PageHeader, Tooltip } from 'antd';
import style from './Layout.module.css';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    BarChartOutlined,
    AppstoreOutlined,
    ContactsOutlined,
    InboxOutlined,
    UserSwitchOutlined,
    WalletOutlined,
    SettingOutlined,
    BellOutlined,
    DownOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const dropDownMenu = (
    <Menu style={{ marginLeft: '20px' }}>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
);

const checkSelectedMenuItem = () => {
    switch (window.location.pathname) {
        case '/analytics':
            return (['0']);
        case '/workflows':
            return (['1']);
        case '/account':
            return (['2']);
        case '/contacts':
            return (['3']);
        case '/inbox':
            return (['4']);
        case '/admin':
            return (['5']);
        case '/billing':
            return (['6']);
        default:
            return (['0']);
    }
}

const menuItemsContent = [
    {
        title: 'Analytics',
        icon: <BarChartOutlined />,
        path: '/analytics'
    },
    {
        title: 'Workflows',
        icon: <AppstoreOutlined />,
        path: '/workflows'
    },
    {
        title: 'Account',
        icon: <BarChartOutlined />,
        path: '/account'
    },
    {
        title: 'Contacts',
        icon: <ContactsOutlined />,
        path: '/contacts'
    },
    {
        title: 'Inbox',
        icon: <InboxOutlined />,
        path: '/inbox'
    },
    {
        title: 'Admin',
        icon: <UserSwitchOutlined />,
        path: '/admin'
    },
    {
        title: 'Biling',
        icon: <WalletOutlined />,
        path: '/billing'
    },
]

const LayoutComponent = ({ children }) => {

    const [collapsed, setCollapsed] = useState(false);
    const [headerTitle, setHeaderTitle] = useState(menuItemsContent[0])

    const toggle = () => {
        setCollapsed(!collapsed)
    };

    return (
        <Layout id='mainLayout'>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" style={{ color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>LOGO</div>
                <Menu className={style.menu} theme="dark" mode="inline" selectedKeys={checkSelectedMenuItem()}>
                    {menuItemsContent.map((item, index) => {
                        return (
                            <Menu.Item key={index} icon={item.icon} onClick={() => setHeaderTitle(item)}>
                                <Link to={item.path}>{item.title}</Link>
                            </Menu.Item>
                        )
                    })}
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    <div className="d-flex-space-between">
                        <div className={style.headerLeft}>
                            {collapsed ? <MenuUnfoldOutlined className='trigger' onClick={() => toggle()} /> : <MenuFoldOutlined className='trigger' onClick={() => toggle()} />}
                            <PageHeader title={[headerTitle.icon, ' ', headerTitle.title]} />
                        </div>
                        <div className={style.headerRight}>
                            <Tooltip title="settings">
                                <Button type="primary" shape="circle" size='large' icon={<SettingOutlined />} />
                            </Tooltip>
                            <Tooltip title="notifications">
                                <Badge count={1} offset={[-10, 5]}>
                                    <Button type="primary" shape="circle" size='large' icon={<BellOutlined />} />
                                </Badge>
                            </Tooltip>


                            <Dropdown overlay={dropDownMenu} trigger={['click']}>
                                <button className={`ant-dropdown-link ${style.profile}`} onClick={e => e.preventDefault()}>
                                    <img src="https://pbs.twimg.com/profile_images/1176237957851881472/CHOXLj9b_400x400.jpg" alt="profile" />
                                    <div className={style.profileDesc}>
                                        <h4>random name</h4>
                                        <span>Random Account</span>
                                    </div>
                                    <DownOutlined />
                                </button>
                            </Dropdown>
                        </div>
                    </div>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        // margin: '24px 16px',
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