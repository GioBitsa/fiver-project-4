import React from 'react';
import style from './LiveFeedComponentItem.module.css'
import { BsFillHandIndexFill, BsArrow90DegLeft } from 'react-icons/bs'
import { CgScreen } from 'react-icons/cg'
import { AiOutlineEye } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

const LiveFeedComponentItem = ({ date, time, name, action, message, interactions }) => {
    return (
        <div className={style.mainCard}>
            <div className={style.header}>
                <h3>{date}</h3>
                <div className={style.headerInteractions}>
                    <div>
                        <span>{interactions.view}</span>
                        <AiOutlineEye color='rgb(90, 86, 233)' />
                    </div>
                    <div>
                        <span>{interactions.click}</span>
                        <BsFillHandIndexFill color='rgb(234, 63, 74)' />
                    </div>
                    <div>
                        <span>{interactions.share}</span>
                        <BsArrow90DegLeft color='rgb(0, 186, 136)' />
                    </div>
                    <div>
                        <span>{interactions.screen}</span>
                        <CgScreen color='rgb(255, 162, 21)' />
                    </div>
                </div>
            </div>
            <div className={style.actualItem}>
                <div className={style.interactions}>
                    {interactions.view > 0 &&
                        <div>
                            <AiOutlineEye color='rgb(90, 86, 233)' />
                            <span>{interactions.view}x</span>
                        </div>
                    }
                    {interactions.click > 0 &&
                        <div>
                            <BsFillHandIndexFill color='rgb(234, 63, 74)' />
                            <span>{interactions.click}x</span>
                        </div>
                    }
                    {interactions.share > 0 &&
                        <div>
                            <BsArrow90DegLeft color='rgb(0, 186, 136)' />
                            <span>{interactions.share}x</span>
                        </div>
                    }
                    {interactions.screen > 0 &&
                        <div>
                            <CgScreen color='rgb(255, 162, 21)' />
                            <span>{interactions.screen}x</span>
                        </div>
                    }
                </div>
                <div className={style.textContainer}>
                    <div>
                        <h4>{name}</h4>
                        <p>{action}</p>
                    </div>
                    <div>
                        <p>
                            <MdEmail />
                            {message}
                        </p>
                    </div>
                </div>
                <div>{time}</div>
            </div>
        </div>
    )
}

export default LiveFeedComponentItem