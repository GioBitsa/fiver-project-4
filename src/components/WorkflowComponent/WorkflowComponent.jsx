import React from 'react'
import { Button, Card, Form, Input, Select, Space } from 'antd'
import style from './WorkflowComponent.module.css'
// import CardComponent from './components/CardComponent';
import FlowComponent from '../FlowComponent/FlowComponent';

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
            {/* <div className={style.workflowMainContainer}>
                <div>
                    <CardComponent
                        profileCard={true}
                        title="Grap Profiles"
                        color="#1890ff"
                        content={[
                            {
                                title: "Account",
                                content: "Hanna Gourie"
                            },
                            {
                                title: "URL",
                                content: "lorem ipsum lorem ipsum lorem ipsum"
                            }
                        ]}
                    />
                </div>
                <div className={style.workflowSecondaryContainer}>
                    <CardComponent
                        profileCard={true}
                        title="Grap Profiles"
                        color="#309535"
                        content={[
                            {
                                title: "Account",
                                content: "Hanna Gourie"
                            },
                            {
                                title: "URL",
                                content: "lorem ipsum lorem ipsum lorem ipsum"
                            },
                            {
                                title: "Message",
                                content: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                            }
                        ]}
                    />
                    <CardComponent
                        profileCard={true}
                        title="Grap Profiles"
                        color="#9846e2"
                        content={[
                            {
                                title: "Account",
                                content: "Hanna Gourie"
                            },
                            {
                                title: "URL",
                                content: "lorem ipsum lorem ipsum lorem ipsum"
                            },
                            {
                                title: "Message",
                                content: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                            }
                        ]}
                    />
                </div>
            </div> */}
            <FlowComponent />
        </>
    )
}

export default WorkflowComponent