import React from 'react'
import { Collapse } from 'antd'
import { FaLinkedinIn } from 'react-icons/fa'
import style from './LinkedinDetails.module.css'

const { Panel } = Collapse;

const LinkedinDetails = () => {
    return (
        <Collapse defaultActiveKey={['1']} ghost expandIconPosition='left'>
            <Panel className={style.panelHeader} extra={<FaLinkedinIn style={{ color: 'rgb(49, 90, 231)' }} />} header="LinkedIn" key="1">
                <p>asdfafsasfs</p>
            </Panel>
        </Collapse >
    )
}

export default LinkedinDetails