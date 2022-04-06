import React from 'react'
import { Button, Card, Tag } from 'antd'
import style from './ProfileStatus.module.css'
import { IoRocketSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { RocketOutlined } from '@ant-design/icons'

const ProfileStatus = () => {
    return (
        <Card className={style.mainCard}>
            <div className={style.header}>
                <h2>Prospecting status</h2>
                <Tag color="error">Inactive</Tag>
            </div>
            <div className={style.content}>
                <Link to='/analytics'>
                    <div>
                        <IoRocketSharp color='rgb(234, 63, 74)' />
                        <h3>0</h3>
                    </div>
                    <p>Active campaigns</p>
                </Link>
                <Link to='/analytics'>
                    <div>
                        <IoRocketSharp color='rgb(234, 63, 74)' />
                        <h3>0</h3>
                    </div>
                    <p>Queued actions</p>
                </Link>
            </div>
            <Button style={{ width: '100%' }} icon={<RocketOutlined />} size='large' shape='round' type='primary'>Create a campaign</Button>
        </Card>
    )
}

export default ProfileStatus