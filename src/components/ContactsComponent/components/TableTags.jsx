import React, { useState } from 'react'
import { Button, Popover, Tag } from 'antd'
import style from '../ContactsComponent.module.css'

const TableTags = ({ data }) => {

    const [visible, setVisible] = useState(false)

    const handleVisibleChange = () => {
        setVisible(!visible)
    }

    return (
        <Popover
            content={
                data.map((item) => (
                    <Tag className={style.tableTag}>{item}</Tag>
                ))
            }
            trigger="click"
            visible={visible}
            onVisibleChange={() => handleVisibleChange()}
        >
            <Button type="primary">...</Button>
        </Popover>
    )
}

export default TableTags