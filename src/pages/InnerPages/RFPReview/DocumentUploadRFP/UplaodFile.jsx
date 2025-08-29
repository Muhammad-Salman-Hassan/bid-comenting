import React, { useState } from 'react';
import {
    Upload,
    Button,
    Typography,
    List,
    Card,
    Row,
    Col,
    Space,
    message,
    Divider
} from 'antd';
import {
    UploadOutlined,
    InboxOutlined,
    FileTextOutlined,
    CloseOutlined,
    DownloadOutlined
} from '@ant-design/icons';

const { Text, Title } = Typography;
const { Dragger } = Upload;

export const RFPReviewUpload = ({
    title = "Upload RFP Documents",
    acceptedTypes = ".pdf,.doc,.docx",
    maxSize = 25,
    onFilesChange,
    initialFiles = []
}) => {
    const [fileList, setFileList] = useState(initialFiles);
    const [uploading, setUploading] = useState(false);

    // Format file size
    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    // Format timestamp
    const formatTimestamp = (date) => {
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        };
        return new Intl.DateTimeFormat('en-GB', options)
            .format(date)
            .replace(/(\d{2})\/(\d{2})\/(\d{4}), (\d{2}):(\d{2})/, '$3/$2/$1, $4:$5');
    };

    // Handle file upload
    const handleUpload = ({ file, onSuccess, onError }) => {
        // Simulate upload process
        setTimeout(() => {
            const newFile = {
                uid: file.uid,
                name: file.name,
                size: file.size,
                type: file.type,
                uploadTime: new Date(),
                status: 'done'
            };

            setFileList(prev => [...prev, newFile]);
            onSuccess(newFile);
            message.success(`${file.name} uploaded successfully`);

            if (onFilesChange) {
                onFilesChange([...fileList, newFile]);
            }
        }, 1000);
    };

    // Remove file
    const removeFile = (fileUid) => {
        const updatedFiles = fileList.filter(file => file.uid !== fileUid);
        setFileList(updatedFiles);

        if (onFilesChange) {
            onFilesChange(updatedFiles);
        }

        message.success('File removed successfully');
    };

    // Upload props
    const uploadProps = {
        name: 'file',
        multiple: true,
        customRequest: handleUpload,
        showUploadList: false,
        accept: acceptedTypes,
        beforeUpload: (file) => {
            const isValidType = acceptedTypes.split(',').some(type =>
                file.name.toLowerCase().endsWith(type.trim().replace('.', ''))
            );

            if (!isValidType) {
                message.error(`Only ${acceptedTypes} files are allowed`);
                return false;
            }

            const isValidSize = file.size / 1024 / 1024 < maxSize;
            if (!isValidSize) {
                message.error(`File must be smaller than ${maxSize}MB`);
                return false;
            }

            return true;
        },
    };

    return (
        <Card style={{ width: '100%', maxWidth: '100%' }}>
            {/* Header */}
            <Space align="center" style={{ marginBottom: '20px' }}>
                <UploadOutlined style={{ fontSize: '16px' }} />
                <Title level={5} style={{ margin: 0 }}>
                    {title}
                </Title>
            </Space>

            {/* Upload Area */}
            <Dragger
                {...uploadProps}
                style={{
                    background: '#fafafa',
                    border: '1px dashed #d9d9d9',
                    borderRadius: '6px',
                    padding: '40px 20px',
                    marginBottom: '24px'
                }}
            >
                <p className="ant-upload-drag-icon">
                    <InboxOutlined style={{ fontSize: '48px', color: '#d9d9d9' }} />
                </p>
                <p style={{ fontSize: '14px', color: '#666', margin: '16px 0 8px 0' }}>
                    Drag and drop files here or click browse
                </p>
                <p style={{ fontSize: '12px', color: '#999', margin: 0 }}>
                    Accepted: {acceptedTypes} Max Size {maxSize}MB
                </p>
            </Dragger>

            {/* Uploaded Files Section */}
            {fileList.length > 0 && (
                <>
                    <Text strong style={{ fontSize: '14px', color: '#666' }}>
                        Uploaded Files ({fileList.length})
                    </Text>

                    <div style={{ marginTop: '16px' }}>
                        {fileList.map((file, index) => (
                            <div key={file.uid}>
                                <Row align="middle" style={{ padding: '12px 0' }}>
                                    {/* File Icon */}
                                    <Col flex="none" style={{ marginRight: '12px' }}>
                                        <FileTextOutlined
                                            style={{
                                                fontSize: '24px',
                                                color: '#1890ff',
                                                padding: '8px',
                                                backgroundColor: '#f0f7ff',
                                                borderRadius: '4px'
                                            }}
                                        />
                                    </Col>

                                    {/* File Info */}
                                    <Col flex="auto">
                                        <Space direction="vertical" size={2}>
                                            <Text strong style={{ fontSize: '14px', color: '#262626' }}>
                                                {file.name}
                                            </Text>
                                            <Text style={{ fontSize: '12px', color: '#8c8c8c' }}>
                                                {formatFileSize(file.size)} • Uploaded {formatTimestamp(file.uploadTime)}
                                            </Text>
                                        </Space>
                                    </Col>

                                    {/* Remove Button */}
                                    <Col flex="none">
                                        <Button
                                            type="text"
                                            size="small"
                                            icon={<CloseOutlined />}
                                            onClick={() => removeFile(file.uid)}
                                            style={{
                                                color: '#999',
                                                border: 'none'
                                            }}
                                        />
                                    </Col>
                                </Row>

                                {/* Separator line (except for last item) */}
                                {index < fileList.length - 1 && (
                                    <Divider style={{ margin: '8px 0' }} />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Upload Button */}
                    <div style={{ textAlign: 'center', marginTop: '24px' }}>
                        <Button
                            className='go-back'
                            icon={<DownloadOutlined />}
                            loading={uploading}
                            onClick={() => {
                                setUploading(true);
                                // Simulate upload process
                                setTimeout(() => {
                                    setUploading(false);
                                    message.success('All files processed successfully');
                                }, 2000);
                            }}
                        >
                            Upload
                        </Button>
                    </div>
                </>
            )}
        </Card>
    );
};
