import React from 'react';
import { Collapse } from 'antd';
import { BarChart, Bar, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import style from './HotLeads.module.css'

const { Panel } = Collapse;

const data = [
    {
        pv: 70,
    },
    {
        pv: 60,
    },
    {
        pv: 80,
    },
    {
        pv: 50,
    },
    {
        pv: 60,
    },
    {
        pv: 50,
    },
    {
        pv: 80,
    },
    {
        pv: 90,
    },
    {
        pv: 60,
    },
    {
        pv: 70,
    },
    {
        pv: 80,
    },
    {
        pv: 50,
    },
    {
        pv: 30,
    },
    {
        pv: 40,
    },
];

const HotLeads = () => {
    return (
        <Collapse defaultActiveKey={['1']} ghost expandIconPosition='left'>
            <Panel className={style.panelHeader} extra={<img src='https://i.ibb.co/SyYP9bF/output-onlinepngtools.png' style={{ color: 'rgb(49, 90, 231)' }} />} header="HotLeads" key="1">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <YAxis />
                        <Bar dataKey="pv" fill="#c9356b" />
                    </BarChart>
                </ResponsiveContainer>
            </Panel>
        </Collapse>
    )
}

export default HotLeads