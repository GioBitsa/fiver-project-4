import React from 'react';
import { Card, Progress } from 'antd';
import style from './LinkedinProgress.module.css';
import { FaLinkedinIn } from 'react-icons/fa';

const LineChartComponent = () => {
    return (
        <Card>
            <div className={style.header}>
                <FaLinkedinIn />
                LinkedIn
            </div>
            <div className={style.progress}>
                <div className={style.text}>
                    <h3>83</h3>
                    <p>Message responses</p>
                </div>
                <div className={style.progressContent}>
                    <Progress type="circle" percent={75} />
                    <p>Message Responses</p>
                </div>
            </div>
        </Card >
    )
}

export default LineChartComponent