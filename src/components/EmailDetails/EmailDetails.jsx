import React from 'react'
import { Collapse } from 'antd'
import { MdEmail } from 'react-icons/md'
import style from './EmailDetails.module.css'

const { Panel } = Collapse;

const EmailDetails = () => {
    return (
        <Collapse defaultActiveKey={['1']} ghost expandIconPosition='left'>
            <Panel className={style.panelHeader} extra={<MdEmail style={{ color: 'rgb(90, 86, 233)' }} />} header="Email" key="1">
                <p>asdfafsasfs</p>
            </Panel>
        </Collapse >
    )
}

export default EmailDetails