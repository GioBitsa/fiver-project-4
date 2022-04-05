import React from 'react'
import { Col, Row } from 'antd'
import LinkedinProgress from '../LinkedinProgress/LinkedinProgress'
import EmailProgress from '../EmailProgress/EmailProgress'
import ProfileStatistics from '../ProfileStatistics/ProfileStatistics'

const Statistics = () => {
    return (
        <Row gutter={[8, 8]} >
            <Col span={24} xl={{ order: 1, span: 16 }} order={2}>
                <Row gutter={[8, 8]} >
                    <Col span={24} sm={12}>
                        <LinkedinProgress />
                    </Col>
                    <Col span={24} sm={12}>
                        <EmailProgress />
                    </Col>
                </Row>
            </Col>
            <Col span={24} xl={{ order: 2, span: 8 }} order={1}>
                <ProfileStatistics />
            </Col>
        </Row>
    )
}

export default Statistics