import React, { useState, PureComponent } from 'react'
import { Card, Col, Collapse, Row, Tabs } from 'antd'
import style from './LinkedinDetails.module.css'
import { FaLinkedinIn } from 'react-icons/fa'
import { TiTick } from 'react-icons/ti'
import { BsArrowReturnLeft, BsLink45Deg } from 'react-icons/bs'
import { BiMessageDetail, BiWifi2 } from 'react-icons/bi'
import { IoIosSend } from 'react-icons/io'
import { AiOutlineEye } from 'react-icons/ai'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const { Panel } = Collapse;
const { TabPane } = Tabs;

const dataKey1 = [
    {
        name: 'Page A',
        uv: 3,
    },
    {
        name: 'Page B',
        uv: 5,
    },
    {
        name: 'Page C',
        uv: 7,
    },
    {
        name: 'Page D',
        uv: 2,
    },
    {
        name: 'Page D',
        uv: 4,
    },
];

const dataKey2 = [
    {
        name: 'Page A',
        uv: 4,
    },
    {
        name: 'Page B',
        uv: 2,
    },
    {
        name: 'Page C',
        uv: 5,
    },
    {
        name: 'Page D',
        uv: 1,
    },
    {
        name: 'Page D',
        uv: 7,
    },
];

const dataKey3 = [
    {
        name: 'Page A',
        uv: 1,
    },
    {
        name: 'Page B',
        uv: 3,
    },
    {
        name: 'Page C',
        uv: 2,
    },
    {
        name: 'Page D',
        uv: 6,
    },
    {
        name: 'Page D',
        uv: 4,
    },
];

const dataKey4 = [
    {
        name: 'Page A',
        uv: 5,
    },
    {
        name: 'Page B',
        uv: 2,
    },
    {
        name: 'Page C',
        uv: 6,
    },
    {
        name: 'Page D',
        uv: 3,
    },
    {
        name: 'Page D',
        uv: 5,
    },
];

const dataKey5 = [
    {
        name: 'Page A',
        uv: 1,
    },
    {
        name: 'Page B',
        uv: 3,
    },
    {
        name: 'Page C',
        uv: 2,
    },
    {
        name: 'Page D',
        uv: 6,
    },
    {
        name: 'Page D',
        uv: 4,
    },
];

const LinkedinDetails = () => {

    const [activeCard, setactiveCard] = useState('1');

    const onTabChange = (key) => {
        setactiveCard(key)
    }

    return (
        <Collapse className='analyticsDropdown' defaultActiveKey={['1']} ghost expandIconPosition='left'>
            <Panel className={style.panelHeader} extra={<FaLinkedinIn style={{ color: 'rgb(49, 90, 231)' }} />} header="LinkedIn" key="1">
                <Row gutter={[8, 8]}>
                    <Col span={24} sm={12}>
                        <Card className={style.cardDetails}>
                            <TiTick color='rgb(0, 186, 136)' />
                            <h2>0%</h2>
                            <p>Acceptance rate</p>
                        </Card>
                    </Col>
                    <Col span={24} sm={12}>
                        <Card className={style.cardDetails}>
                            <BsArrowReturnLeft color='rgb(49, 90, 231)' />
                            <h2>0%</h2>
                            <p>Response rate</p>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card>
                            <Tabs defaultActiveKey="1" onChange={(e) => onTabChange(e)} tabBarGutter={8} centered>
                                <TabPane
                                    tab={
                                        <Card className={[style.cardDetails, activeCard === '1' ? style.activeCard : null].join(' ')}>
                                            <BsLink45Deg color='rgb(49, 90, 231)' />
                                            <h2>0</h2>
                                            <p>Acceptance rate</p>
                                        </Card>
                                    }
                                    key="1"
                                >
                                    <p className={style.title}>Actions sent</p>
                                    <ResponsiveContainer width='100%' height={300}>
                                        <LineChart
                                            width={500}
                                            height={300}
                                            data={dataKey1}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </TabPane>
                                <TabPane
                                    tab={
                                        <Card className={[style.cardDetails, activeCard === '2' ? style.activeCard : null].join(' ')}>
                                            <BiMessageDetail color='rgb(255, 162, 21)' />
                                            <h2>0</h2>
                                            <p>Acceptance rate</p>
                                        </Card>
                                    }
                                    key="2"
                                >
                                    <p className={style.title}>Actions sent</p>
                                    <ResponsiveContainer width='100%' height={300}>
                                        <LineChart
                                            width={500}
                                            height={300}
                                            data={dataKey2}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </TabPane>
                                <TabPane
                                    tab={
                                        <Card className={[style.cardDetails, activeCard === '3' ? style.activeCard : null].join(' ')}>
                                            <IoIosSend color='rgb(0, 186, 136)' />
                                            <h2>0</h2>
                                            <p>Acceptance rate</p>
                                        </Card>
                                    }
                                    key="3"
                                >
                                    <p className={style.title}>Actions sent</p>
                                    <ResponsiveContainer width='100%' height={300}>
                                        <LineChart
                                            width={500}
                                            height={300}
                                            data={dataKey3}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </TabPane>
                                <TabPane
                                    tab={
                                        <Card className={[style.cardDetails, activeCard === '4' ? style.activeCard : null].join(' ')}>
                                            <AiOutlineEye color='rgb(90, 86, 233)' />
                                            <h2>0</h2>
                                            <p>Acceptance rate</p>
                                        </Card>
                                    }
                                    key="4"
                                >
                                    <p className={style.title}>Actions sent</p>
                                    <ResponsiveContainer width='100%' height={300}>
                                        <LineChart
                                            width={500}
                                            height={300}
                                            data={dataKey4}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </TabPane>
                                <TabPane
                                    tab={
                                        <Card className={[style.cardDetails, activeCard === '5' ? style.activeCard : null].join(' ')}>
                                            <BiWifi2 color='rgb(255, 123, 158)' />
                                            <h2>0</h2>
                                            <p>Acceptance rate</p>
                                        </Card>
                                    }
                                    key="5"
                                >
                                    <p className={style.title}>Actions sent</p>
                                    <ResponsiveContainer width='100%' height={300}>
                                        <LineChart
                                            width={500}
                                            height={300}
                                            data={dataKey5}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </TabPane>
                            </Tabs>
                        </Card>
                    </Col>
                </Row>
            </Panel>
        </Collapse >
    )
}

export default LinkedinDetails