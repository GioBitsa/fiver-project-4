import React, { useState } from 'react';
import { Badge, Button, Dropdown, Layout, Menu, Modal, PageHeader, Tooltip } from 'antd';
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
    UserOutlined,
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
        key: 0,
        title: 'Analytics',
        icon: <BarChartOutlined />,
        path: '/analytics'
    },
    {
        key: 1,
        title: 'Workflows',
        icon: <AppstoreOutlined />,
        path: '/workflows'
    },
    {
        key: 2,
        title: 'Account',
        icon: <UserOutlined />,
        path: '/account'
    },
    {
        key: 3,
        title: 'Contacts',
        icon: <ContactsOutlined />,
        path: '/contacts'
    },
    {
        key: 4,
        title: 'Inbox',
        icon: <InboxOutlined />,
        path: '/inbox'
    },
    {
        key: 5,
        title: 'Admin',
        icon: <UserSwitchOutlined />,
        path: '/admin'
    },
    {
        key: 6,
        title: 'Biling',
        icon: <WalletOutlined />,
        path: '/billing'
    },
]

const LayoutComponent = ({ children }) => {

    const [collapsed, setCollapsed] = useState(false);
    const [visible, setVisible] = useState(false);
    const [visibleSettings, setVisibleSettings] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [headerTitle, setHeaderTitle] = useState(menuItemsContent[checkSelectedMenuItem()])

    const toggle = () => {
        setCollapsed(!collapsed)
    };

    // settings modal
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisibleSettings(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        setVisibleSettings(false);
    };

    // notification modal
    const handleOkNotifications = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancelNotifications = () => {
        setVisible(false);
    };

    const checkResponsive = () => {
        if (window.innerWidth < 576) {
            setCollapsed(true)
        }
    }

    return (
        <Layout id='mainLayout'>
            <Sider breakpoint='sm' onBreakpoint={() => checkResponsive()} trigger={null} collapsible collapsed={collapsed}>
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
                            <PageHeader className={style.headerTitle} title={[headerTitle.icon, ' ', headerTitle.title]} />
                        </div>
                        <div className={style.headerRight}>

                            {/* settings button */}
                            <Tooltip onClick={() => setVisibleSettings(!visibleSettings)}>
                                <Button className={style.headerBtn} type="primary" shape="circle" size='large' icon={<SettingOutlined />} />
                            </Tooltip>

                            {/* settings modal */}
                            <Modal
                                title="Settings"
                                confirmLoading={confirmLoading}
                                visible={visibleSettings}
                                onCancel={() => handleCancel()}
                                footer={[
                                    <Button key="back" onClick={() => handleCancel()}>
                                        Cancel
                                    </Button>,
                                    <Button key="submit" type="primary" loading={confirmLoading} onClick={() => handleOk()}>
                                        Save
                                    </Button>
                                ]}
                            >
                                <p>Some Settings...</p>
                                <p>Some Settings...</p>
                                <p>Some Settings...</p>
                            </Modal>

                            {/* notifications button */}
                            <Tooltip onClick={() => setVisible(!visible)}>
                                <Badge count={1} offset={[-10, 5]}>
                                    <Button className={style.headerBtn} type="primary" shape="circle" size='large' icon={<BellOutlined />} />
                                </Badge>
                            </Tooltip>

                            {/* notifications modal */}
                            <Modal
                                title="Notifications"
                                confirmLoading={confirmLoading}
                                visible={visible}
                                onCancel={() => handleCancelNotifications()}
                                footer={[
                                    <Button key="back" onClick={() => handleCancelNotifications()}>
                                        Cancel
                                    </Button>,
                                    <Button key="submit" type="primary" loading={confirmLoading} onClick={() => handleOkNotifications()}>
                                        Save
                                    </Button>
                                ]}
                            >
                                <p>Some Settings...</p>
                                <p>Some Settings...</p>
                                <p>Some Settings...</p>
                            </Modal>

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
                        overflowY: 'auto',
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default LayoutComponent;