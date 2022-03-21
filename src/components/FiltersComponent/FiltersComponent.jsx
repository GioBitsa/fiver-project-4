import React from 'react'
import { Button, Card, Form, Input, Select } from 'antd'
import style from './FiltersComponent.module.css'
import ButtonComponent from './components/ButtonComponent'

const { Option } = Select;

const FiltersComponent = () => {

    return (
        <Card>
            <div className={style.buttonsContainer}>
                <ButtonComponent title="Connected" />
                <ButtonComponent title="Send Message" />
                <ButtonComponent title="Lorem Ipsum" />
                <ButtonComponent title="Dolor Sit" />
                <ButtonComponent title="A Met" />
                <ButtonComponent title="Lorem Ipsum" />
                <ButtonComponent title="Dolor Sit" />
                <ButtonComponent title="A Met" />
                <ButtonComponent title="Connected" />
                <ButtonComponent title="Lorem Ipsum" />
                <ButtonComponent title="Lorem Ipsum" />
            </div>
            <Form>
                <div className={style.inputsContainer}>
                    <Input size='large' placeholder="Search Name..." />
                    <Select placeholder="Select Gender">
                        <Option value="man">Man</Option>
                        <Option value="woman">Woman</Option>
                        <Option value="none">other</Option>
                    </Select>
                    <Select placeholder="Select Status">
                        <Option value="active">Active</Option>
                        <Option value="notActive">Not Active</Option>
                    </Select>
                    <Select placeholder="Select Connection">
                        <Option value="connected">Connected</Option>
                        <Option value="notConnected">Not Connected</Option>
                    </Select>
                    <Button type='primary' size='large'>More Filter</Button>
                </div>
            </Form>
        </Card>
    )
}

export default FiltersComponent