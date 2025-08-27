import React from 'react';
import { Form, Input, Button, Checkbox, Typography, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router';

const { Title, Text } = Typography;

const Login = () => {
    const navigate = useNavigate()
    const onFinish = (values) => {
       navigate("/app/dashboard")
    };



    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
            <Row style={{ minHeight: '100vh', padding: "25px 15px" }}>

                <Col
                    xs={24}
                    lg={12}
                    xl={12}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        backgroundColor: 'white'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px' }}>
                        <div style={{ marginRight: '12px' }}>

                            <img src='/src/assets/logo-sm.png' width={50} />

                        </div>
                        <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937' }}>
                            BID COMMAND
                        </span>
                    </div>
                    <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>



                        {/* Welcome Text */}
                        <div style={{ marginBottom: '32px' }}>
                            <Title
                                level={2}
                                style={{
                                    color: '#1f2937',
                                    marginBottom: '8px',
                                    fontWeight: 'bold',
                                    fontSize: '28px'
                                }}
                            >
                                Welcome To BID Command
                            </Title>
                            <Text style={{ color: '#6b7280', fontSize: '16px' }}>
                                Enter your email and password to access your account.
                            </Text>
                        </div>

                        {/* Login Form */}
                        <Form
                            name="login"
                            onFinish={onFinish}
                            layout="vertical"
                            size="large"
                            style={{ width: '100%' }}
                        >
                            <Form.Item
                                label={<span style={{ fontWeight: '500', color: '#374151' }}>Email</span>}
                                name="email"
                                rules={[
                                    { required: true, message: 'Please input your email!' },
                                    { type: 'email', message: 'Please enter a valid email!' }
                                ]}
                                style={{ textAlign: "start" }}
                            >
                                <Input
                                    prefix={<UserOutlined style={{ color: '#9ca3af' }} />}
                                    placeholder="your-mail@mail.com"
                                    style={{
                                        borderRadius: '8px',
                                        padding: '12px',
                                        fontSize: '16px'
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                label={<span style={{ fontWeight: '500', color: '#374151' }}>Password</span>}
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                                style={{ textAlign: "start" }}

                            >
                                <Input.Password
                                    prefix={<LockOutlined style={{ color: '#9ca3af' }} />}
                                    placeholder="••••••••••"
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    style={{
                                        borderRadius: '8px',
                                        padding: '12px',
                                        fontSize: '16px'
                                    }}
                                />
                            </Form.Item>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '24px'
                            }}>
                                <Form.Item name="remember" valuePropName="checked" style={{ margin: 0 }}>
                                    <Checkbox>Remember Me</Checkbox>
                                </Form.Item>
                                <a
                                    href="#"
                                    style={{
                                        color: '#1890ff',
                                        textDecoration: 'none',
                                        fontWeight: '500'
                                    }}
                                    onMouseOver={(e) => e.target.style.color = '#40a9ff'}
                                    onMouseOut={(e) => e.target.style.color = '#1890ff'}
                                >
                                    Forgot Your Password?
                                </a>
                            </div>

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    style={{
                                        width: '100%',
                                        height: '48px',
                                        backgroundColor: '#1890ff',
                                        borderColor: '#1890ff',
                                        borderRadius: '8px',
                                        fontSize: '16px',
                                        fontWeight: '500'
                                    }}
                                    size="large"
                                >
                                    Log In
                                </Button>
                            </Form.Item>
                        </Form>

                        {/* Register Link */}
                        <div style={{ textAlign: 'center', marginTop: '24px' }}>
                            <Text style={{ color: '#6b7280' }}>
                                Don't Have An Account?{' '}
                                <a
                                    href="#"
                                    style={{
                                        color: '#1890ff',
                                        textDecoration: 'none',
                                        fontWeight: '500'
                                    }}
                                    onMouseOver={(e) => e.target.style.color = '#40a9ff'}
                                    onMouseOut={(e) => e.target.style.color = '#1890ff'}
                                >
                                    Register Now.
                                </a>
                            </Text>
                        </div>
                    </div>

                    {/* Footer */}
                    <div style={{ marginTop: 'auto', paddingTop: '32px' }}>
                        <Text style={{ color: '#9ca3af', fontSize: '14px' }}>
                            Copyright © 2025 BID Command
                        </Text>
                    </div>
                </Col>


                <Col
                    xs={0}
                    lg={12}
                    xl={12}
                    style={{
                        background: "#4075C6",
                        borderRadius: "20px"
                    }}
                >

                </Col>
            </Row>
        </div>
    );
};

export default Login;