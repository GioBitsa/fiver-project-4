import React, { useState } from 'react'
import { Button, Card, Table, Space, Avatar, Modal } from 'antd'
import { DeleteOutlined, FieldTimeOutlined, KeyOutlined, PlusOutlined } from '@ant-design/icons'

const Profiles = () => {

    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <Space size="small" align="center">
                    <Avatar size="large" style={{ backgroundColor: `${record.avatar}` }}>S</Avatar>
                    <span>{text}</span>
                </Space>
            ),
        },
        {
            title: 'Proxy',
            dataIndex: 'proxy',
            key: 'proxy',
            render: text => (
                <Space size="small" align="center">
                    <img src="https://i.ibb.co/6WVRN6p/cbimage-2.png" alt="flag" width={35} />
                    <span>{text}</span>
                </Space>
            ),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: text => text ? 'Active' : 'Not Active'
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: () => (
                <Space size="middle">
                    <Button shape="circle" icon={<DeleteOutlined />} size='large' />
                    <Button shape="circle" icon={<FieldTimeOutlined />} size='large' />
                    <Button shape="circle" icon={<KeyOutlined />} size='large' />
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'Random Person 1',
            avatar: '#fc0398',
            proxy: '111111111',
            status: true,
            company: 'Apple',
        },
        {
            key: '2',
            name: 'Random Person 2',
            avatar: '#46a832',
            proxy: '222222222',
            status: false,
            company: 'Google',
        },
        {
            key: '3',
            name: 'Random Person 3',
            avatar: '#a84632',
            proxy: '333333333',
            status: false,
            company: 'Google',
        },
    ];

    // add button modal
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <>
            <Card title="Profiles" extra={<Button onClick={() => setVisible(true)} type='primary' icon={<PlusOutlined />} size="large">Add New Account</Button>}>
                <Table columns={columns} dataSource={data} />
            </Card>
            {/* add button modal */}
            <Modal
                title="Add New Account"
                confirmLoading={confirmLoading}
                visible={visible}
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
                <p>Some accounts...</p>
                <p>Some accounts...</p>
                <p>Some accounts...</p>
            </Modal>
        </>
    )
}

export default Profiles;