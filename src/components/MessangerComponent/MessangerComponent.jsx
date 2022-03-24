import React, { useState, useEffect } from 'react'
import { Button, Card, Divider, Drawer, Input, Space, Tag } from 'antd'
import style from './MessangerComponent.module.css'
import { BarsOutlined, SearchOutlined } from '@ant-design/icons'
import User from './components/User'

const MessangerComponent = () => {

    const [visible, setVisible] = useState(true);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => setScreenWidth(window.innerWidth))
    }, [])

    const childComponent = (
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
            <User />
            <User />
            <User />
        </div>
    )

    return (
        <Card style={{ overflow: 'hidden', height: "70vh" }}>
            <div className={style.mainContainer}>
                {
                    screenWidth < 900 ?
                        <Drawer
                            id='messangerDrawer'
                            placement="left"
                            closable={true}
                            onClose={() => setVisible(false)}
                            visible={visible}
                            getContainer={false}
                            style={{ position: 'absolute' }}
                        >
                            {childComponent}
                        </Drawer>
                        :
                        childComponent
                }
                <div>
                    <BarsOutlined onClick={() => setVisible(!visible)} className={style.barIcon} />
                    <img src="https://i.ibb.co/BycWvHR/capture.jpg" alt="" />
                </div>
            </div>
        </Card>
    )
}

export default MessangerComponent