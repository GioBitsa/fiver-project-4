import React from 'react'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Divider } from 'antd'
import style from '../MessangerComponent.module.css'

const User = () => {

    return (
        <>
            <div className={style.userContainer}>
                <div className={style.imgContainer}>
                    <img src="https://pbs.twimg.com/profile_images/1176237957851881472/CHOXLj9b_400x400.jpg" alt="profile" />
                    <img src="https://pbs.twimg.com/profile_images/1176237957851881472/CHOXLj9b_400x400.jpg" alt="profile 2" />
                </div>
                <div className={style.userAbout}>
                    <h4>Jen Fellows</h4>
                    <p>Lorem ipsum santos ember sankto</p>
                </div>
                <div className={style.otherDetails}>
                    <span>4.15 PM</span>
                    <ExclamationCircleOutlined />
                </div>
            </div>
            <Divider />
        </>
    )
}

export default User