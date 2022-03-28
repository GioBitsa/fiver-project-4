import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import style from './LoginComponent.module.css';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate("/");
        }, 2000)
    };

    return (
        <div className={style.mainContainer}>
            <div className={style.sideContainer}>
                <div>
                    <span>Helping Square</span>
                    <h2>Connect teams</h2>
                    <p>Team Connect will help to schedule <br /> meetings with different teams</p>
                </div>
            </div>
            <div className={style.sideContainer}>
                <Form
                    name="login"
                    className={style.loginForm}
                    initialValues={{
                        remember: false,
                    }}
                    onFinish={(e) => onFinish(e)}
                >
                    <h2>Welcome Back</h2>
                    <div className={style.signUp}>
                        <h3>New here?</h3>
                        <a href="/">Sign up</a>
                    </div>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="/" style={{ float: 'right' }}>
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button loading={loading} size='large' type="primary" htmlType="submit" className={style.loginButton}>
                            Log in
                        </Button>
                    </Form.Item>
                    <Divider className={style.divider} />
                    <Form.Item>
                        <Button size='large' type="default" className={style.loginButton}>
                            Log in with Google
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default LoginComponent