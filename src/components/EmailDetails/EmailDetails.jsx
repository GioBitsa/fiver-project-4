import React from 'react'
import { Card, Col, Collapse, Row, } from 'antd'
import { MdEmail } from 'react-icons/md'
import style from './EmailDetails.module.css'
import { TiTick } from 'react-icons/ti'
import { BsArrowReturnLeft, BsLink45Deg } from 'react-icons/bs'
import { BiBlock } from 'react-icons/bi'

const { Panel } = Collapse;

const EmailDetails = () => {

    return (
        <Collapse defaultActiveKey={['1']} ghost expandIconPosition='left'>
            <Panel className={style.panelHeader} extra={<MdEmail style={{ color: 'rgb(90, 86, 233)' }} />} header="Email" key="1">
                <Row gutter={[8, 8]}>
                    <Col span={24} sm={12} lg={8}>
                        <Card className={style.cardDetails}>
                            <TiTick color='rgb(0, 186, 136)' />
                            <h2>0%</h2>
                            <p>Delivered</p>
                        </Card>
                    </Col>
                    <Col span={24} sm={12} lg={8}>
                        <Card className={style.cardDetails}>
                            <BsArrowReturnLeft color='rgb(90, 86, 233)' />
                            <h2>0%</h2>
                            <p>Received a response</p>
                        </Card>
                    </Col>
                    <Col span={24} sm={24} lg={8}>
                        <Card className={style.cardDetails}>
                            <BiBlock color='rgb(234, 63, 74)' />
                            <h2>0%</h2>
                            <p>Not delivered</p>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card>
                            <p className={style.title}>Actions sent</p>
                            <Col span={24} sm={12} lg={6}>
                                <Card className={[style.cardDetails, style.activeCard].join(' ')}>
                                    <BsLink45Deg color='rgb(49, 90, 231)' />
                                    <h2>0</h2>
                                    <p>Mails</p>
                                </Card>
                            </Col>
                        </Card>
                    </Col>
                </Row>
            </Panel>
        </Collapse >
    )
}

export default EmailDetails