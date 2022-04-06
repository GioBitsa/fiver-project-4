import React from 'react'
import { Card, Col, Collapse, Row } from 'antd'
import { MdEmail } from 'react-icons/md'
import style from './EmailDetails.module.css'

const { Panel } = Collapse;

const EmailDetails = () => {
    return (
        <Collapse defaultActiveKey={['1']} ghost expandIconPosition='left'>
            <Panel className={style.panelHeader} extra={<MdEmail style={{ color: 'rgb(90, 86, 233)' }} />} header="Email" key="1">
                <Row gutter={[8, 8]}>
                    <Col span={8}>
                        <Card>asd</Card>
                    </Col>
                    <Col span={8}>
                        <Card>asd</Card>
                    </Col>
                    <Col span={8}>
                        <Card>asd</Card>
                    </Col>
                    <Col span={24}>
                        <Card>asd</Card>
                    </Col>
                </Row>
            </Panel>
        </Collapse >
    )
}

export default EmailDetails