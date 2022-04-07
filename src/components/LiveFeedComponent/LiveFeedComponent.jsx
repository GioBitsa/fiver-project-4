import React from 'react'
import style from './LiveFeedComponent.module.css'
import { Button, Card, Select, Space, Tag, Input } from 'antd'
import { AiFillFilter } from 'react-icons/ai'
import { HiOutlineRefresh } from 'react-icons/hi'
import { FiDownload } from 'react-icons/fi'
import LiveFeedComponentItem from './components/LiveFeedComponentItem'

const { Option } = Select;
const { Search } = Input;

const dataTags = [
    {
        key: 1,
        text: 'some tag11'
    },
    {
        key: 2,
        text: 'some tag22'
    },
    {
        key: 3,
        text: 'some tag33'
    },
]

const liveFeedData = [
    {
        key: 1,
        date: 'today',
        time: '06:22pm',
        name: 'randomUser@gmail.com',
        action: 'Clicked a link',
        message: 'Should I stay or should I go?',
        interactions: {
            view: 1,
            click: 0,
            share: 0,
            screen: 0,
        },
    },
    {
        key: 2,
        date: 'Monday 22 March 2022',
        time: '12:30am',
        name: 'randomUser2@gmail.com',
        action: 'viewed profile',
        message: 'sent an attachment',
        interactions: {
            view: 2,
            click: 1,
            share: 0,
            screen: 0,
        },
    },
]

const LiveFeedComponent = () => {

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    const onSearch = value => console.log(value);

    return (
        <Card className='liveFeed'>
            <h2 className={style.title}>LIVEFEED</h2>
            <Space size={5} className={style.filters} wrap={true}>
                <Select style={{ width: '100px' }} defaultValue="all" onChange={(e) => handleChange(e)}>
                    <Option value="all">All</Option>
                    <Option value="today">Today</Option>
                    <Option value="week">This Week</Option>
                </Select>
                <Button type="primary" icon={<AiFillFilter />} />
                <Search style={{ width: '120px' }} placeholder="Search" allowClear onSearch={onSearch} />
                <Button type="primary" icon={<FiDownload />} />
                <Button type="primary" icon={<HiOutlineRefresh />} />
            </Space>
            <div>
                {dataTags.map((item) => (
                    <Tag style={{ margin: '0 5px 5px 0' }} size='large' key={item.key} closable>
                        {item.text}
                    </Tag>
                ))}
            </div>
            <div className={style.items}>
                {liveFeedData.map((item, index) => (
                    <LiveFeedComponentItem
                        key={item.key}
                        date={item.date}
                        time={item.time}
                        name={item.name}
                        action={item.action}
                        message={item.message}
                        interactions={item.interactions}
                    />
                ))}
            </div>
        </Card>
    )
}

export default LiveFeedComponent