import React from 'react';
import { Card, Typography, Tag, Row, Col, Space } from 'antd';
import {
    CheckCircleFilled,
    ClockCircleOutlined,
    MinusCircleOutlined
} from '@ant-design/icons';

const { Text } = Typography;

const ProjectTimeline = ({ timelineData }) => {
    // Status configuration matching the exact design
    const statusConfig = {
        'Complete': {
            icon: <CheckCircleFilled style={{ fontSize: '18px', color: '#52c41a' }} />,
            tagColor: 'success'
        },
        'In Progress': {
            icon: <ClockCircleOutlined style={{ fontSize: '18px', color: '#1890ff' }} />,
            tagColor: 'processing'
        },
        'Pending': {
            icon: <MinusCircleOutlined style={{ fontSize: '18px', color: '#d9d9d9' }} />,
            tagColor: 'default'
        }
    };

    return (
        <div style={{
            backgroundColor: '#F6F7F9',
            borderRadius: '8px',
            padding:"10px 0px"
        }}>
            {timelineData?.map((item, index) => (
                <div key={item.id}>
                    <Card
                        size="small"
                        variant="borderless"
                        bodyStyle={{
                            padding: '16px 24px',
                            // backgroundColor: 'red'
                        }}
                        style={{
                            backgroundColor: 'white',
                            margin: "10px"
                        }}
                    >
                        <Row align="middle" gutter={16}>
                            {/* Icon Section */}
                            <Col flex="none">
                                {statusConfig[item.status]?.icon}
                            </Col>

                            {/* Content Section */}
                            <Col flex="auto">
                                <Space direction="vertical" size={2}>
                                    <Text strong style={{ fontSize: '14px', color: '#262626' }}>
                                        {index + 1}. {item.title}
                                    </Text>
                                    <Text style={{ fontSize: '12px', color: '#8c8c8c' }}>
                                        {item.dueDate}
                                    </Text>
                                </Space>
                            </Col>

                            {/* Status Tag Section */}
                            <Col flex="none">
                                <Tag
                                    color={statusConfig[item.status]?.tagColor}
                                    style={{
                                        border: 'none',
                                        fontSize: '12px',
                                        padding: '4px 12px',
                                        borderRadius: '4px',
                                        margin: 0
                                    }}
                                >
                                    {item.status}
                                </Tag>
                            </Col>
                        </Row>
                    </Card>


                </div>
            ))}


        </div>
    );
};


export default ProjectTimeline 