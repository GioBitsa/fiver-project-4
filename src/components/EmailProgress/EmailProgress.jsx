import React from 'react';
import { Card, Progress } from 'antd';
import style from './EmailProgress.module.css';
import { MdEmail } from 'react-icons/md';

const EmailProgress = () => {
    return (
        <Card>
            <div className={style.header}>
                <MdEmail style={{ color: 'rgb(90, 86, 233)' }} />
                Email
            </div>
            <div className={style.progress}>
                <div className={style.text}>
                    <h3>83</h3>
                    <p>Email responses</p>
                </div>
                <div className={style.progressContent}>
                    <Progress type="circle" percent={25} />
                    <p>Email Responses</p>
                </div>
            </div>
        </Card >
    )
}

export default EmailProgress