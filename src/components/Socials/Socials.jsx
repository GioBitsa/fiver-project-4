import React from 'react';
import { Avatar, Card, Tooltip } from 'antd';
import Slider from "react-slick";
import style from './Socials.module.css';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';

const Socials = () => {

    const settings = {
        className: style.reactSlickContainer,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        autoplay: true,
        speed: 2000,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
        ]
    };

    return (
        <Card>
            <div className={style.socialsContainer}>
                <Slider {...settings}>
                    <div>
                        <img src="http://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4OAgf?ver=6a31" alt="microsoft" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/4TDf5xL/cbimage.png" alt="xiaomi" />
                    </div>
                    <div>
                        <img src="http://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4OAgf?ver=6a31" alt="microsoft" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/4TDf5xL/cbimage.png" alt="xiaomi" />
                    </div>
                    <div>
                        <img src="http://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4OAgf?ver=6a31" alt="microsoft" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/4TDf5xL/cbimage.png" alt="xiaomi" />
                    </div>
                </Slider>
                <div className={style.avatarsGroup}>
                    <Avatar.Group
                        maxCount={4}
                        maxPopoverTrigger="click"
                        size="large"
                        maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
                    >
                        <Avatar style={{ backgroundColor: '#fc0398' }}>S</Avatar>
                        <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                        <Avatar style={{ backgroundColor: '#42f584' }}>G</Avatar>
                        <Avatar style={{ backgroundColor: '#9042f5' }}>T</Avatar>
                        <Tooltip title="Default User" placement="top">
                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        </Tooltip>
                        <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                    </Avatar.Group>
                </div>
            </div>
        </Card>
    )
}

export default Socials