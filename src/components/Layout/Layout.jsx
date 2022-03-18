import React, { useState } from 'react';
import { Badge, Button, Dropdown, Layout, Menu, PageHeader, Tooltip } from 'antd';
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
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const dropDownMenu = (
    <Menu style={{ marginLeft: '20px' }}>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
);

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
                <Menu className={style.menu} theme="dark" mode="inline" defaultSelectedKeys={['0']}>
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