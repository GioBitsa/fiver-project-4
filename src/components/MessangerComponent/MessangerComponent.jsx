import React from 'react'
import { Button, Card, Divider, Input, Space, Tag } from 'antd'
import style from './MessangerComponent.module.css'
import { SearchOutlined } from '@ant-design/icons'

const MessangerComponent = () => {
    return (
        <Card>
            <div className={style.mainContainer}>
                <div>
                    <Space size="small" align="center" className={style.spaceContainer}>
                        <Input prefix={<SearchOutlined />} size='large' placeholder="Search.." />
                        <Button size='large' type='primary'>Filter</Button>
                    </Space>
                    <div className={style.tagsContainer}>
                        <Tag className={style.tagButton} closable>24-32</Tag>
                        <Tag className={style.tagButton} closable>California</Tag>
                        <Tag className={style.tagButton} closable>CEO</Tag>
                        <Tag className={style.tagButton} closable>Male</Tag>
                    </div>
                    <Divider />
                </div>
                <div>
                    asd
                </div>
            </div>
        </Card>
    )
}

export default MessangerComponent