import React, { useState } from 'react'
import { Button, Card, Col, Drawer, Row } from 'antd'
import style from '../WorkflowComponent.module.css'
import { DeleteOutlined, DisconnectOutlined, MailOutlined, MessageOutlined, MoreOutlined } from '@ant-design/icons'

const CardComponent = ({ title, color, content, profileCard }) => {

    const [visible, setVisible] = useState(false)

    return (
        <div id='workflowComponent' className={style.itemCard} style={{ borderLeft: `5px solid ${color}` }}>
            <Card>
                <div className='d-flex-space-between'>
                    <h4 style={{ color: color }}>{title}</h4>
                    <div className={style.rightSide}>
                        <div className={style.imgContainer}>
                            <img src="https://i.ibb.co/BycWvHR/capture.jpg" alt="profile" />
                            <img src="https://i.ibb.co/BycWvHR/capture.jpg" alt="profile" />
                            <img src="https://i.ibb.co/BycWvHR/capture.jpg" alt="profile" />
                        </div>
                        <Button onClick={() => setVisible(true)} icon={profileCard ? <MoreOutlined /> : <DeleteOutlined />} />
                    </div>
                </div>
                <div className={style.contentContainer}>
                    {content.map((item => {
                        return (
                            <Row gutter={[8, 8]}>
                                <Col span={6}>
                                    <h4>{item.title}</h4>
                                </Col>
                                <Col span={18}>{item.content}</Col>
                            </Row>
                        )
                    }))}
                </div>
                <Button type='primary' onClick={() => setVisible(true)}>Next Step</Button>
                <Drawer
                    title="Add Next Step"
                    placement="left"
                    closable={true}
                    onClose={() => setVisible(false)}
                    visible={visible}
                    getContainer={false}
                    style={{ position: 'absolute' }}
                >
                    <div className={style.drawerBody}>
                        <Button style={{ borderLeft: `5px solid ${color}` }} className={style.drawerButton} icon={<DisconnectOutlined style={{ color: color }} />}>Conntect</Button>
                        <Button style={{ borderLeft: `5px solid ${color}` }} className={style.drawerButton} icon={<MessageOutlined style={{ color: color }} />}>Message</Button>
                        <Button style={{ borderLeft: `5px solid ${color}` }} className={style.drawerButton} icon={<MailOutlined style={{ color: color }} />}>Find Email</Button>
                    </div>
                </Drawer>
            </Card>
        </div>
    )
}

export default CardComponent