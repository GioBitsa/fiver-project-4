import React from 'react'
import { Button, Card, Form, Input, Select, Space } from 'antd'
import style from './WorkflowComponent.module.css'

const { Option } = Select;

const WorkflowComponent = () => {
    return (
        <>
            <Card>
                <Form
                    layout='vertical'
                >
                    <Space align='center' className={style.workflowTitle}>
                        <Form.Item label="Workflow Title">
                            <Input required />
                        </Form.Item>
                        <Form.Item label="Company">
                            <Select>
                                <Option value="jack">Company 1</Option>
                                <Option value="lucy">Company 2</Option>
                                <Option value="Yiminghe">Company 3</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button size='large' type='primary'>Save</Button>
                        </Form.Item>
                    </Space>
                </Form>
            </Card>
        </>
    )
}

export default WorkflowComponent