import React, { useState } from 'react';
import { Button } from 'antd';

const ButtonComponent = ({ title }) => {

    const [buttonType, setButtonType] = useState(false)

    return (
        <>
            <Button type={buttonType ? 'primary' : 'default'} onClick={() => setButtonType(!buttonType)}>
                {title}
            </Button>
        </>
    )
}

export default ButtonComponent