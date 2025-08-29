import React from 'react';
import {
    Row,
    Col,
    Card,
    Input,
    DatePicker,
    Button,
    Typography,
    Upload,
    Avatar,
    List,
    Flex,
    Form,
    Space,
    message
} from 'antd';
import {
    PaperClipOutlined,
    SendOutlined,
    UserOutlined
} from '@ant-design/icons';
import { CardHeader } from '@/components/SharedComponent/CardHeader/CardHeader';
import BackButton from '@/components/SharedComponent/BackButton/BackButton';


const { TextArea } = Input;
const { Text } = Typography;

const BidInvitation = () => {
    const [form] = Form.useForm();

    // Mock data for message center
    const messageData = [
        {
            id: 1,
            supplier: 'Supplier A',
            type: 'Tender Invitation',
            date: '10-08-2025',
            message: 'We have received your tender invitation'
        },
        {
            id: 2,
            supplier: 'Supplier A',
            type: 'Tender Invitation',
            date: '10-08-2025',
            message: 'We have received your tender invitation'
        },
        {
            id: 3,
            supplier: 'Supplier A',
            type: 'Tender Invitation',
            date: '10-08-2025',
            message: 'We have received your tender invitation'
        },
        {
            id: 4,
            supplier: 'Supplier A',
            type: 'Tender Invitation',
            date: '10-08-2025',
            message: 'We have received your tender invitation'
        },
        {
            id: 5,
            supplier: 'Supplier A',
            type: 'Tender Invitation',
            date: '10-08-2025',
            message: 'We have received your tender invitation'
        },
        {
            id: 6,
            supplier: 'Supplier A',
            type: 'Tender Invitation',
            date: '10-08-2025',
            message: 'We have received your tender invitation'
        }
    ];

    const handleSendInvitation = async (values) => {
        try {
            console.log('Form values:', values);
            message.success('Tender invitation sent successfully!');
        } catch (error) {
            message.error('Failed to send tender invitation. Please try again.');
        }
    };

    const handleSendInvitationError = (errorInfo) => {
        console.log('Validation failed:', errorInfo);
        message.error('Please fill in all required fields correctly.');
    };

    const uploadProps = {
        beforeUpload: () => false,
        showUploadList: true,
        multiple: true,
        accept: '.pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png',
    };

    // Custom validator for bid deadline
    //   const validateBidDeadline = (_, value) => {
    //     if (!value) {
    //       return Promise.reject(new Error('Please select bid deadline'));
    //     }

    //     const today = moment().startOf('day');
    //     const selectedDate = moment(value).startOf('day');

    //     if (selectedDate.isBefore(today)) {
    //       return Promise.reject(new Error('Bid deadline cannot be in the past'));
    //     }

    //     if (selectedDate.isSame(today)) {
    //       return Promise.reject(new Error('Bid deadline must be at least 1 day from today'));
    //     }

    //     return Promise.resolve();
    //   };

    return (
        <div style={{ padding: '0 24px' }}>
            <Flex justify='center' align='center'>
                <CardHeader
                    title="Tender Invitation"
                    isButton={false}
                    Cardwidth={"90%"}
                />
            </Flex>

            <BackButton />

            <div style={{ marginTop: '24px' }}>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSendInvitation}
                    onFinishFailed={handleSendInvitationError}
                    validateMessages={{
                        required: '${label} is required',
                        types: {
                            email: '${label} is not a valid email',
                        },
                        string: {
                            min: '${label} must be at least ${min} characters',
                            max: '${label} cannot exceed ${max} characters',
                        },
                    }}
                >
                    <Row gutter={24}>

                        <Col xs={24} lg={16}>
                            <Card
                                title="Create Tender Invite Email"
                                style={{ height: '100%' }}
                                bodyStyle={{ padding: '24px' }}
                            >
                               



                                    {/* Bid Deadline */}
                                    <Row gutter={16}>
                                        <Col span={12}>
                                            <Form.Item
                                                label={<Text strong>Email Subject</Text>}
                                                name="emailSubject"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please enter email subject',
                                                    },
                                                    {
                                                        min: 5,
                                                        message: 'Email subject must be at least 5 characters',
                                                    },
                                                    {
                                                        max: 200,
                                                        message: 'Email subject cannot exceed 200 characters',
                                                    },
                                                    {
                                                        pattern: /^[a-zA-Z0-9\s\-_.,!?()]+$/,
                                                        message: 'Email subject contains invalid characters',
                                                    }
                                                ]}
                                            >
                                                <Input
                                                    placeholder="Enter email subject"
                                                    style={{ width: '100%' }}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                                label={<Text strong>Bid Deadline</Text>}
                                                name="bidDeadline"
                                            // rules={[
                                            //   {
                                            //     validator: validateBidDeadline,
                                            //   }
                                            // ]}
                                            >
                                                <DatePicker
                                                    format="YYYY-MM-DD"
                                                    placeholder="Select deadline date"
                                                    style={{ width: '100%' }}
                                                    disabledDate={(current) => {
                                                        // Disable dates before today
                                                        return current && current < moment().startOf('day');
                                                    }}
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    {/* Email Message */}
                                    <Form.Item
                                        label={<Text strong>Email Message</Text>}
                                        name="emailMessage"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter email message',
                                            },
                                            {
                                                min: 20,
                                                message: 'Email message must be at least 20 characters',
                                            },
                                            {
                                                max: 2000,
                                                message: 'Email message cannot exceed 2000 characters',
                                            }
                                        ]}
                                    >
                                        <TextArea
                                            placeholder="Enter your tender invitation message..."
                                            rows={8}
                                            style={{ width: '100%', resize: 'none' }}
                                            showCount
                                            maxLength={2000}
                                        />
                                    </Form.Item>

                                    <Row gutter={16}>
                                        <Col span={24}>
                                            <Form.Item
                                                label={<Text strong>Attachments</Text>}
                                                name="attachments"
                                                style={{
                                                  
                                                    width:"100%"
                                                }}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please upload at least one attachment',
                                                    }
                                                ]}
                                                getValueFromEvent={(e) => {
                                                    if (Array.isArray(e)) {
                                                        return e;
                                                    }
                                                    return e && e.fileList;
                                                }}
                                            >
                                                <Upload {...uploadProps}  style={{
                                                  
                                                  width:"100%"
                                              }}>
                                                    <div
                                                        style={{
                                                            border: '2px dashed #d9d9d9',
                                                            borderRadius: '8px',
                                                            padding: '40px',
                                                            textAlign: 'center',
                                                            cursor: 'pointer',
                                                            backgroundColor: '#fafafa',
                                                            width:"100%"
                                                        }}
                                                    >
                                                        <PaperClipOutlined
                                                            style={{ fontSize: '24px', color: '#bfbfbf', marginBottom: '8px' }}
                                                        />
                                                        <div style={{ color: '#8c8c8c' }}>
                                                            Click to add attachments (PDF, DOC, XLS, Images)
                                                        </div>
                                                        <div style={{ color: '#bfbfbf', fontSize: '12px', marginTop: '4px' }}>
                                                            Maximum file size: 10MB per file
                                                        </div>
                                                    </div>
                                                </Upload>
                                            </Form.Item>
                                        </Col>

                                    </Row>

                            
                            </Card>
                        </Col>


                        <Col xs={24} lg={8}>
                            <Card
                                title="Message Center"
                                style={{ height: '100%' }}
                                bodyStyle={{ padding: '16px' }}
                            >
                                <Text type="secondary" style={{ fontSize: '12px', display: 'block', marginBottom: '16px' }}>
                                    Preview and track all tender communications in one place.
                                </Text>

                                <List
                                    dataSource={messageData}
                                    renderItem={(item) => (
                                        <List.Item style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
                                            <Space style={{ width: '100%' }}>
                                                <Avatar
                                                    style={{ backgroundColor: '#1677ff' }}
                                                    icon={<UserOutlined />}
                                                >
                                                    S
                                                </Avatar>
                                                <div style={{ flex: 1 }}>
                                                    <div>
                                                        <Text strong style={{ fontSize: '13px' }}>
                                                            {item.supplier}
                                                        </Text>
                                                        <Text
                                                            style={{
                                                                fontSize: '11px',
                                                                color: '#1677ff',
                                                                marginLeft: '8px'
                                                            }}
                                                        >
                                                            {item.date}
                                                        </Text>
                                                    </div>
                                                    <div>
                                                        <Text
                                                            style={{
                                                                color: '#1677ff',
                                                                fontSize: '12px',
                                                                fontWeight: 'bold'
                                                            }}
                                                        >
                                                            {item.type}
                                                        </Text>
                                                    </div>
                                                    <div>
                                                        <Text
                                                            type="secondary"
                                                            style={{ fontSize: '11px' }}
                                                        >
                                                            {item.message}
                                                        </Text>
                                                    </div>
                                                </div>
                                            </Space>
                                        </List.Item>
                                    )}
                                />
                            </Card>
                        </Col>
                    </Row>

                    {/* Send Button */}
                    <div style={{ textAlign: 'center', marginTop: '32px', marginBottom: '32px' }}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            icon={<SendOutlined />}
                            size="large"
                            style={{
                                backgroundColor: '#1677ff',
                                borderColor: '#1677ff',
                                borderRadius: '6px',
                                padding: '0 32px',
                                height: '48px',
                                fontSize: '16px'
                            }}
                        >
                            Send Tender Invitation
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default BidInvitation;