import React from 'react';
import { Button, Typography, Row, Col, Space } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';

const { Title, Paragraph } = Typography;

const NotFound = () => {
  const navigate = useNavigate()
  const handleGoHome = () => {
    navigate("/app/dashboard")
  };

  return (
    <div style={{
      minHeight: '70vh',
      padding: '80px 24px 60px',
      display: 'flex',
      alignItems: 'center',
      background: '#fafafa'
    }}>
      <Row
        gutter={[64, 32]}
        align="middle"
        justify="center"
        style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}
      >
        <Col xs={24} lg={12} style={{ textAlign: 'center' }}>
          <img
            style={{
              maxWidth: '100%',
              height: 'auto',
              display: 'block',
              margin: '0 auto'
            }}
            src="https://i.ibb.co/v30JLYr/Group-192-2.png"
            alt="404 Not Found"
          />
        </Col>

        <Col xs={24} lg={12}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Title
              level={1}
              style={{
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontWeight: 800,
                color: '#262626',
                margin: 0,
                lineHeight: 1.2
              }}
            >
              Looks like you've found the doorway to the great nothing
            </Title>

            <Space direction="vertical" size="middle">
              <Paragraph
                style={{
                  fontSize: '16px',
                  color: '#595959',
                  margin: 0,
                  lineHeight: 1.6
                }}
              >
                The content you're looking for doesn't exist. Either it was removed,
                or you mistyped the link.
              </Paragraph>

              <Paragraph
                style={{
                  fontSize: '16px',
                  color: '#595959',
                  margin: 0,
                  lineHeight: 1.6
                }}
              >
                Sorry about that! Please visit our homepage to get where you need to go.
              </Paragraph>
            </Space>

            <Button
              type="primary"
              size="large"
              icon={<HomeOutlined />}
              onClick={handleGoHome}
              style={{
                height: '48px',
                borderRadius: '6px',
                fontWeight: 500,
                fontSize: '16px',
                background: '#1890ff',
                borderColor: '#1890ff',
                boxShadow: '0 2px 8px rgba(24, 144, 255, 0.3)',
                minWidth: '200px'
              }}
              className="homepage-button"
            >
              Go back to Homepage
            </Button>
          </Space>
        </Col>
      </Row>

      <style jsx>{`
        .homepage-button:hover {
          background: #096dd9 !important;
          borderColor: #096dd9 !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(24, 144, 255, 0.4) !important;
        }

        .homepage-button:focus {
          background: #096dd9 !important;
          borderColor: #096dd9 !important;
          box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2) !important;
        }

        @media (max-width: 768px) {
          .homepage-button {
            width: 100% !important;
            min-width: auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;