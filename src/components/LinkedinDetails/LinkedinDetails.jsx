import React from 'react'
import { Card, Col, Collapse, Row } from 'antd'
import { FaLinkedinIn } from 'react-icons/fa'
import style from './LinkedinDetails.module.css'

const { Panel } = Collapse;

const LinkedinDetails = () => {
    return (
        <Collapse defaultActiveKey={['1']} ghost expandIconPosition='left'>
            <Panel className={style.panelHeader} extra={<FaLinkedinIn style={{ color: 'rgb(49, 90, 231)' }} />} header="LinkedIn" key="1">
                <Row gutter={[8, 8]}>
                    <Col span={12}>
                        <Card>asd</Card>
                    </Col>
                    <Col span={12}>
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

export default LinkedinDetails