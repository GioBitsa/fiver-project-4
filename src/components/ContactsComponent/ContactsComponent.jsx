import React from 'react'
import { Card, Table, Tag, Space, Avatar } from 'antd'
import style from './ContactsComponent.module.css'
import { ManOutlined, WomanOutlined } from '@ant-design/icons';
import TableTags from './components/TableTags';

const ContactsComponent = () => {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <Space style={{ minWidth: '150px' }} size="small" align="center">
                    <Avatar size="large" style={{ backgroundColor: `${record.avatar}` }}>S</Avatar>
                    <span>{text}</span>
                </Space>
            ),
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            responsive: ['md']
        },
        {
            title: 'Tags',
            dataIndex: 'tags',
            key: 'tags',
            render: text => (
                <Space size="small" align="center">
                    {
                        text.length > 2 ?
                            <>
                                {
                                    window.innerWidth > 1000 &&
                                    <>
                                        <Tag className={style.tableTag}>{text[0]}</Tag>
                                        <Tag className={style.tableTag}>{text[1]}</Tag>
                                    </>
                                }
                                <TableTags data={text} />
                            </>
                            :
                            text.map((item) => <Tag className={style.tableTag}>{item}</Tag>)
                    }
                </Space >
            ),
            responsive: ['md']
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            render: text => text ? <ManOutlined /> : <WomanOutlined />,
            responsive: ['lg']
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
    ];

    const data = [
        {
            key: '1',
            avatar: '#fc0398',
            name: 'Random Person 1',
            title: 'CEO',
            tags: ['some', 'Connected', 'Send Message',],
            location: 'USA',
            age: 32,
            gender: true,
            company: 'Apple',
            email: 'some@email.com',
        },
        {
            key: '2',
            avatar: '#46a832',
            name: 'Random Person 2',
            title: 'CEO',
            tags: ['some', 'Connected', 'Send Message',],
            location: 'USA',
            age: 32,
            gender: true,
            company: 'Google',
            email: 'some@email.com',
        },
        {
            key: '3',
            avatar: '#a84632',
            name: 'Random Person 3',
            title: 'CEO',
            tags: ['some', 'Connected', 'Send Message',],
            location: 'USA',
            age: 32,
            gender: false,
            company: 'Google',
            email: 'some@email.com',
        },
    ];

    return (
        <Card>
            <div className={style.tagsContainer}>
                <Tag closable className={style.tagButton}>
                    California
                </Tag>
                <Tag closable className={style.tagButton}>
                    24-32
                </Tag>
                <Tag closable className={style.tagButton}>
                    California
                </Tag>
                <Tag closable className={style.tagButton}>
                    24-32
                </Tag>
                <Tag closable className={style.tagButton}>
                    CEO
                </Tag>
                <Tag closable className={style.tagButton}>
                    Company
                </Tag>
            </div>
            <div>
                <Table className={style.table} columns={columns} dataSource={data} />
            </div>
        </Card>
    )
}

export default ContactsComponent