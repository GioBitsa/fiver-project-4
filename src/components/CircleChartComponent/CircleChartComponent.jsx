import React from 'react';
import { Card } from 'antd';
import style from './CircleChartComponent.module.css';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28',];

const CircleChartComponent = () => {
    return (
        <Card>
            <div className={style.title}>
                Best Performing Workflow
            </div>
            <div className={style.flexContainer}>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart
                        width="100%"
                        height="100%"
                    >
                        <Pie
                            data={data}
                            cx={80}
                            cy={150}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className={style.textContent}>
                    <div>
                        <div className={style.subTitle}>
                            <h5>Workflow 1</h5>
                            <span style={{ backgroundColor: `${COLORS[0]}` }}></span>
                        </div>
                        <p>lorem Ipsum</p>
                    </div>
                    <div>
                        <div className={style.subTitle}>
                            <h5>Workflow 22</h5>
                            <span style={{ backgroundColor: `${COLORS[1]}` }}></span>
                        </div>
                        <p>lorem Ipsum</p>
                    </div>
                    <div>
                        <div className={style.subTitle}>
                            <h5>Workflow 3</h5>
                            <span style={{ backgroundColor: `${COLORS[2]}` }}></span>
                        </div>
                        <p>lorem Ipsum</p>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default CircleChartComponent