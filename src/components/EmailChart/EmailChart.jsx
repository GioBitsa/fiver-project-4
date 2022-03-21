import React from 'react';
import { Card } from 'antd';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import style from './EmailChart.module.css';
import { MailOutlined } from '@ant-design/icons';

const data = [
    {
        name: 'S',
        uv: 3,
        pv: 3,
        amt: 2400,
    },
    {
        name: 'M',
        uv: 6,
        pv: 6,
        amt: 2210,
    },
    {
        name: 'T',
        uv: 5,
        pv: 5,
        amt: 2290,
    },
    {
        name: 'W',
        uv: 12,
        pv: 12,
        amt: 2000,
    },
    {
        name: 'T',
        uv: 3,
        pv: 3,
        amt: 2181,
    },
    {
        name: 'F',
        uv: 9,
        pv: 9,
        amt: 2500,
    },
    {
        name: 'S',
        uv: 7,
        pv: 7,
        amt: 2100,
    },
];

const EmailChart = () => {

    return (
        <Card>
            <div className={style.header}>
                <div className={style.title}>
                    <MailOutlined />
                    Email Fetched
                </div>
                <h3>93</h3>
            </div>
            <ResponsiveContainer width='110%' height={300}>
                <LineChart
                    width='100%'
                    height='100%'
                    data={data}
                    style={{ transform: 'translateX(-40px)' }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </Card >
    )
}

export default EmailChart