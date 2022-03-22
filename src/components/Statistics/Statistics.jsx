import React from 'react'
import { Col, Row } from 'antd'
import ConnectionChart from '../ConnectionChart/ConnectionChart'
import FollowChart from '../FollowChart/FollowChart'
import EmailChart from '../EmailChart/EmailChart'
import BarChartComponent from '../BarChartComponent/BarChartComponent'
import CircleChartComponent from '../CircleChartComponent/CircleChartComponent'

const Statistics = () => {
    return (
        <Row gutter={[8, 8]} >
            <Col span={24} md={{ span: 12, }} xl={{ span: 8, }}>
                <ConnectionChart />
            </Col>
            <Col span={24} md={{ span: 12 }} xl={{ span: 8, }}>
                <FollowChart />
            </Col>
            <Col span={24} md={{ span: 12 }} xl={{ span: 8, }}>
                <EmailChart />
            </Col>

            <Col span={24} md={{ span: 12 }} xl={{ span: 8, }}>
                <CircleChartComponent />
            </Col>
            <Col span={24} md={{ span: 24 }} xl={{ span: 16, }}>
                <BarChartComponent />
            </Col>
        </Row>
    )
}

export default Statistics