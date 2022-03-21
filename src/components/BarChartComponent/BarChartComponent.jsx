import React from 'react';
import { Card } from 'antd';
import style from './BarChartComponent.module.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        pv: 2400,
        amt: 2400,
    },
    {
        pv: 3398,
        amt: 2210,
    },
    {
        pv: 9800,
        amt: 2290,
    },
    {
        pv: 5908,
        amt: 2000,
    },
    {
        pv: 4800,
        amt: 2181,
    },
    {
        pv: 7800,
        amt: 2500,
    },
];

const BarChartComponent = () => {
    return (
        <Card>
            <div className={style.title}>
                Best Performing Company
            </div>
            <div className={style.flexContainer}>
                <ResponsiveContainer width='110%' height={300}>
                    <BarChart
                        width='100%'
                        height='100%'
                        data={data}
                        style={{ transform: 'translateX(-20px)' }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="pv" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
                <div className={style.textContent}>
                    <div>
                        <div className={style.subTitle}>
                            <h5>Workflow 22</h5>
                            <span style={{ backgroundColor: '#8884d8' }}></span>
                        </div>
                        <p>lorem Ipsum</p>
                    </div>
                    <div>
                        <div className={style.subTitle}>
                            <h5>Workflow 22</h5>
                            <span style={{ backgroundColor: '#8884d8' }}></span>
                        </div>
                        <p>lorem Ipsum</p>
                    </div>
                    <div>
                        <div className={style.subTitle}>
                            <h5>Workflow 22</h5>
                            <span style={{ backgroundColor: '#8884d8' }}></span>
                        </div>
                        <p>lorem Ipsum</p>
                    </div>
                    <div>
                        <div className={style.subTitle}>
                            <h5>Workflow 22</h5>
                            <span style={{ backgroundColor: '#8884d8' }}></span>
                        </div>
                        <p>lorem Ipsum</p>
                    </div>
                    <div>
                        <div className={style.subTitle}>
                            <h5>Workflow 22</h5>
                            <span style={{ backgroundColor: '#8884d8' }}></span>
                        </div>
                        <p>lorem Ipsum</p>
                    </div>
                    <div>
                        <div className={style.subTitle}>
                            <h5>Workflow 22</h5>
                            <span style={{ backgroundColor: '#8884d8' }}></span>
                        </div>
                        <p>lorem Ipsum</p>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default BarChartComponent