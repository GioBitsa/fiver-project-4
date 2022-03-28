import React, { useState, useEffect } from 'react'
import { LayoutComponent } from '../../components';

const Home = () => {

    const [animated, setanimated] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setanimated(true)
        }, 500)
    }, [])

    return (
        <div className={`main-page ${animated ? 'animated' : null}`}>
            <LayoutComponent>home</LayoutComponent>
        </div>
    )
}

export default Home