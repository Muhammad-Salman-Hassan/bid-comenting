import React, { useState } from 'react';
import {
    Steps,
    Form,
    Input,
    Select,
    DatePicker,
    Button,
    Card,
    Row,
    Col,
    message,
    Divider,
    InputNumber,
    Upload,
    Space,
    Tag,
    Avatar,
    Typography,
    TimePicker,
    Flex,
    Checkbox
} from 'antd';
import {
    InfoCircleOutlined,
    DollarOutlined,
    TeamOutlined,
    UserOutlined,
    FileTextOutlined,
    PlusOutlined,
    UploadOutlined,
    DeleteOutlined,
    GlobalOutlined,
    ToolOutlined
} from '@ant-design/icons';

const { Step } = Steps;
const { TextArea } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { Title, Text } = Typography;

const ProjectStepperForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    // Form data for each step
    const [formData, setFormData] = useState({
        projectInfo: {},
        bidInfo: {},
        stakeholders: [],
        teamAssignment: [],
        requirements: {}
    });

    const steps = [
        {
            title: 'Project Information',
            icon: <InfoCircleOutlined />,
            description: 'Basic project details'
        },
        {
            title: 'Bid Information',
            icon: <DollarOutlined />,
            description: 'Bid details and pricing'
        },
        {
            title: 'Project Stakeholders',
            icon: <TeamOutlined />,
            description: 'Key stakeholders and contacts'
        },
        {
            title: 'Team Assignment',
            icon: <UserOutlined />,
            description: 'Team members and roles'
        },
        {
            title: 'Project Requirements',
            icon: <FileTextOutlined />,
            description: 'Technical requirements'
        }
    ];

    // API call simulation - replace with actual API calls
    const saveStepData = async (stepData, stepIndex) => {
        setLoading(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Update form data
            const stepKeys = ['projectInfo', 'bidInfo', 'stakeholders', 'teamAssignment', 'requirements'];
            setFormData(prev => ({
                ...prev,
                [stepKeys[stepIndex]]: stepData
            }));

            message.success(`Step ${stepIndex + 1} data saved successfully!`);
            return true;
        } catch (error) {
            message.error('Failed to save step data. Please try again.');
            return false;
        } finally {
            setLoading(false);
        }
    };

    const handleNext = async () => {
        try {
            const values = await form.validateFields();

            // Save current step data (optional API call)
            const success = await saveStepData(values, currentStep);

            if (success) {
                setCurrentStep(currentStep + 1);

            }
        } catch (error) {
            message.error('Please complete all required fields.');
        }
    };

    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = async () => {
        try {
            const values = await form.validateFields();

            // Save final step data
            await saveStepData(values, currentStep);

            // Submit entire form
            const finalData = {
                ...formData,
                requirements: values
            };

            console.log('Final form data:', finalData);
            message.success('Project created successfully!');

            // Reset form or redirect
            // form.resetFields();
            // setCurrentStep(0);
            // setFormData({});

        } catch (error) {
            message.error('Please complete all required fields.');
        }
    };

    // Step 1: Project Information
    const ProjectInfoStep = () => (
        <Row gutter={24}>
            <Col span={24}>
                <Form.Item
                    label="Job Name"
                    name="projectName"
                    rules={[{ required: true, message: 'Please enter job name' }]}
                >
                    <Input placeholder="Enter job name" />
                </Form.Item>
            </Col>
            <Col span={24}>
                <Form.Item
                    label="Project Address"
                    name="projectaddress"
                    rules={[{ required: true, message: 'Please enter project address' }]}
                >
                    <Input placeholder="Enter Project Address" />
                </Form.Item>
            </Col>

            <Col span={12}>
                <Form.Item
                    label="Project Type"
                    name="projectType"
                    rules={[{ required: true, message: 'Please enter client name' }]}
                >
                    <Select placeholder="Select project type">
                        <Option value="construction">Construction</Option>
                        <Option value="it">IT Services</Option>
                        <Option value="consulting">Consulting</Option>
                        <Option value="manufacturing">Manufacturing</Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col span={6}>
                <Form.Item
                    label="Project Size"
                    name="projectSize"
                    rules={[{ required: true, message: 'Please Project Size' }]}
                >
                    <Space.Compact >
                        <Input type='number' />

                        <Select defaultValue="name">
                            <Option value="name">SQ</Option>
                            <Option value="email">SQFT</Option>
                            <Option value="phone">Ft</Option>
                        </Select>
                    </Space.Compact>
                </Form.Item>
            </Col>
            <Col span={6}>
                <Form.Item
                    label="Estimated Project Value"
                    name="projectEsimation"
                    rules={[{ required: true, message: 'Please select project duration' }]}
                >
                    <Input prefix="$" />
                </Form.Item>
            </Col>
            <Col span={24}>
                <Form.Item
                    label="High Level Scope of Work"
                    name="scopework"
                    rules={[{ required: true, message: 'Please enter scope of work' }]}
                >
                    <Input.TextArea placeholder="Brief High Level Scope of Work" />
                </Form.Item>
            </Col>
            <Col span={24}>
                <Form.Item
                    label="Initial Proposal Risk Factor"
                    name="ristFactor"
                    rules={[{ required: true, message: 'Please enter Risk Factor' }]}
                >
                    <TextArea rows={4} placeholder="List any Initial Proposal Risk Factor" />
                </Form.Item>
            </Col>
        </Row>
    );

    // Step 2: Bid Information
    const BidInfoStep = () => (
        <Row gutter={24}>
            <Col span={12}>
                <Form.Item
                    label="Bid Due Date"
                    name="bidDuedate"
                    rules={[{ required: true, message: 'Please Select Bid Due Date' }]}
                >
                    <DatePicker style={{ width: '100%' }} />

                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    label="Currency"
                    name="currency"
                    rules={[{ required: true, message: 'Please select currency' }]}
                >
                    <TimePicker style={{ width: '100%' }} />

                </Form.Item>
            </Col>
            <Col span={24}>
                <Form.Item
                    label="Bid Submission Method"
                    name="submissionmenthod"
                    rules={[{ required: true, message: 'Please select submission method' }]}
                >
                    <Select defaultValue="name">
                        <Option value="name">SQ</Option>
                        <Option value="email">SQFT</Option>
                        <Option value="phone">Ft</Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    label="RFI Due Date"
                    name="rfiddate"
                >
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    label="RFI Submission Method"
                    name="rfimethod"
                >
                    <Select defaultValue="name">
                        <Option value="name">SQ</Option>
                        <Option value="email">SQFT</Option>
                        <Option value="phone">Ft</Option>
                    </Select>
                </Form.Item>
            </Col>


            <Col span={12}>
                <Form.Item
                    label="Requested start Date"
                    name="requestedStartDate"
                >
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    label="Requested Completion Date"
                    name="requestedCompletedate"
                >
                    <DatePicker style={{ width: '100%' }} />

                </Form.Item>
            </Col>


            <Col span={12}>
                <Form.Item
                    label="Site Meeting Date"
                    name="siteMeetingDate"
                >
                    <DatePicker style={{ width: '100%' }} />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    label="Meeting Time"
                    name="meetingTime"
                >
                    <TimePicker style={{ width: '100%' }} />

                </Form.Item>
            </Col>

            <Col span={12}>
                <Form.Item
                    label="Is meeting Mandatory"
                    name="meetingMendetory"
                >
                    <Select defaultValue="name">
                        <Option value="name">SQ</Option>
                        <Option value="email">SQFT</Option>
                        <Option value="phone">Ft</Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    label="Award Date"
                    name="awardDate"
                >
                    <DatePicker style={{ width: '100%' }} />

                </Form.Item>
            </Col>

        </Row>
    );

    // Step 3: Project Stakeholders
    const StakeholdersStep = () => {
        const [stakeholders, setStakeholders] = useState([{
            id: Date.now(),
            name: '',
            role: '',
            email: '',
            phone: '',
            company: '',
            website: '',
            additionalDetails: "",
            shortDescription: ''
        }]);

        const addStakeholder = () => {
            const newStakeholder = {
                id: Date.now(),
                name: '',
                role: '',
                email: '',
                phone: '',
                company: '',
                website: '',
                additionalDetails: "",
                shortDescription: ''
            };
            setStakeholders([...stakeholders, newStakeholder]);
        };

        const removeStakeholder = (id) => {
            setStakeholders(stakeholders.filter(s => s.id !== id));
        };

        return (
            <div>


                {stakeholders.map((stakeholder, index) => (
                    <Card
                        key={stakeholder.id}
                        size="small"
                        style={{ marginBottom: '16px', borderRadius: '8px' }}
                        title={`Stakeholder ${index + 1}`}
                        extra={
                            <Button
                                type="text"
                                danger
                                icon={<DeleteOutlined />}
                                onClick={() => removeStakeholder(stakeholder.id)}
                            />
                        }
                    >
                        <Row gutter={16}>
                            <Col xs={24} sm={12}>
                                <Form.Item
                                    label="Name"
                                    name={`stakeholder_name_${stakeholder.id}`}
                                    rules={[{ required: true, message: 'Please enter name' }]}
                                >
                                    <Input placeholder="Enter Stakeholder Name" />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12}>
                                <Form.Item
                                    label="Company Name"
                                    name={`stakeholder_company_${stakeholder.id}`}
                                >
                                    <Input placeholder="Enter Company Name" />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12}>
                                <Form.Item
                                    label="Role"
                                    name={`stakeholder_role_${stakeholder.id}`}
                                    rules={[{ required: true, message: 'Please enter role' }]}
                                >
                                    <Input placeholder="Enter Role" />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12}>
                                <Form.Item
                                    label="Company Website"
                                    name={`stakeholder_website_${stakeholder.id}`}
                                >
                                    <Input
                                        placeholder="www.website.com"
                                        prefix={<GlobalOutlined />}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12}>
                                <Form.Item
                                    label="Email"
                                    name={`stakeholder_email_${stakeholder.id}`}
                                    rules={[
                                        { required: true, message: 'Please enter email' },
                                        { type: 'email', message: 'Please enter valid email' }
                                    ]}
                                >
                                    <Input placeholder="Enter email address" />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12}>
                                <Form.Item
                                    label="Phone"
                                    name={`stakeholder_phone_${stakeholder.id}`}
                                >
                                    <Input placeholder="Enter phone number" />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24}>
                                <Form.Item
                                    name="shortDescription"
                                    label="Short Description"
                                >
                                    <TextArea
                                        rows={3}
                                        placeholder="Short Description"
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24}>
                                <Form.Item
                                    name="additionalDetails"
                                    label="Additional Details"
                                >
                                    <TextArea
                                        rows={4}
                                        placeholder="contracts, agreements, RFPs"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Card>
                ))}

                <Flex justify='center' align='center'>
                    <Row gutter={24}>
                        <Col span={24}>
                            <Button
                                type="dashed"
                                onClick={addStakeholder}
                                icon={<PlusOutlined />}
                                style={{ marginBottom: 16 }}
                            >
                                Add Stakeholder
                            </Button>
                        </Col>
                    </Row>
                </Flex>

            </div>
        );
    };

    // Step 4: Team Assignment
    const TeamAssignmentStep = () => {
        const [teamMembers, setTeamMembers] = useState([]);

        const addTeamMember = () => {
            const newMember = {
                id: Date.now(),
                name: '',
                role: '',
                department: '',
                skills: []
            };
            setTeamMembers([...teamMembers, newMember]);
        };

        const removeMember = (id) => {
            setTeamMembers(teamMembers.filter(m => m.id !== id));
        };

        return (
            <div>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Project Manager"
                            name={`pm`}
                            rules={[{ required: true, message: 'Please enter name' }]}
                        >
                            <Select placeholder="Select role">
                                <Option value="project_manager">Project Manager</Option>
                                <Option value="developer">Developer</Option>
                                <Option value="designer">Designer</Option>
                                <Option value="analyst">Business Analyst</Option>
                                <Option value="qa">QA Engineer</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Lead Estimator"
                            name={`lead_estimator`}
                            rules={[{ required: true, message: 'Please select role' }]}
                        >
                            <Select placeholder="Select role">
                                <Option value="project_manager">Project Manager</Option>
                                <Option value="developer">Developer</Option>
                                <Option value="designer">Designer</Option>
                                <Option value="analyst">Business Analyst</Option>
                                <Option value="qa">QA Engineer</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            label="Project Superintendent"
                            name={`projectSuperintendent`}
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                </Row>
             
            </div>
        );
    };

    // Step 5: Project Requirements
    const RequirementsStep = () => {
        const [majorTrades, setMajorTrades] = useState({
            Electrical: true,
            Framing: false,
            Civil: false,
            Sparkless: false,
            Lendingering: false,
            Guiding: false,
            Surveying: false,
            Concrete: false,
            HVAC: false,
            HelicalFiles: false,
            Extences: false,
            Drywall: false,
            Ambbit: false,
            Patrilling: false,
            ConcreteTesting: false,
            MillVoxik: false,
            Plumbing: false,
            WindowsDone: false,
            StructuralSteel: false,
            Insulation: false,
            Flowing: false,
            OverheadDone: false,
            CompactionTesting: false
        });

        const handleTradeChange = (trade) => {
            setMajorTrades({
                ...majorTrades,
                [trade]: !majorTrades[trade]
            });
        };



        return (

            <div >
                <Row gutter={[0, 0]} className='checkbox-req' >
                    {Object.entries(majorTrades).map(([trade, checked]) => (
                        <Col xs={12} sm={8} md={6} key={trade}>
                            <Form.Item>
                                <Checkbox
                                    checked={checked}
                                    onChange={() => handleTradeChange(trade)}
                                >
                                    {trade.replace(/([A-Z])/g, ' $1').trim()}
                                </Checkbox>
                            </Form.Item>
                        </Col>
                    ))}
                </Row>


                <Form.Item
                    name="otherTrades"
                    label="List any other trades"
                    style={{marginTop:"1rem"}}
                >
                    <TextArea
                        rows={3}
                        placeholder="Enter any trades not listed above"
                    />
                </Form.Item>



                <Form.Item
                    name="ledRequirements"
                    label="Describe any LED certification or sustainability requirements (if specified)"
                >
                    <TextArea
                        rows={3}
                        placeholder="Describe LED or sustainability requirements"
                    />
                </Form.Item>



                <Form.Item
                    name="domogosClause"
                    label="Enter Updated domogos details if specified"
                >
                    <TextArea
                        rows={3}
                        placeholder="Enter domogos clause details"
                    />
                </Form.Item>



                <Form.Item
                    name="instanceRequirements"
                    label="List any specific instances requirements"
                >
                    <TextArea
                        rows={3}
                        placeholder="Enter instance requirements"
                    />
                </Form.Item>



                <Form.Item
                    name="safetyRequirements"
                    label="Describe any specific safety requirements"
                >
                    <TextArea
                        rows={3}
                        placeholder="Describe safety requirements"
                    />
                </Form.Item>


                <Form.Item
                    name="otherRequirements"
                    label="List any additional project-specific requirements"
                >
                    <TextArea
                        rows={3}
                        placeholder="Enter any other requirements"
                    />
                </Form.Item>



            



            </div>

        );
    };


    const renderStepContent = () => {
        switch (currentStep) {
            case 0:
                return <ProjectInfoStep />;
            case 1:
                return <BidInfoStep />;
            case 2:
                return <StakeholdersStep />;
            case 3:
                return <TeamAssignmentStep />;
            case 4:
                return <RequirementsStep />;
            default:
                return null;
        }
    };

    return (
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: 32 }}>
                Create New Project
            </Title>

            {/* Steps Header */}
            <Steps current={currentStep} style={{ marginBottom: 32 }}>
                {steps.map((step, index) => (
                    <Step
                        key={index}
                        title={step.title}
                    />
                ))}
            </Steps>

            {/* Form Content */}
            <Card style={{ backgroundColor: "#FBFBFB" }}>
                <Form
                    form={form}
                    layout="vertical"
                    requiredMark={false}
                >
                    <Title level={4} style={{ marginBottom: 24 }}>
                        {steps[currentStep].title}
                    </Title>

                    {renderStepContent()}

                    <Divider />

                    {/* Navigation Buttons */}
                    <div style={{ textAlign: 'right' }}>
                        <Space>
                            {currentStep > 0 && (
                                <Button onClick={handlePrev}>
                                    Previous
                                </Button>
                            )}

                            {currentStep < steps.length - 1 ? (
                                <Button
                                    type="primary"
                                    onClick={handleNext}
                                    loading={loading}
                                >
                                    Next
                                </Button>
                            ) : (
                                <Button
                                    type="primary"
                                    onClick={handleSubmit}
                                    loading={loading}
                                >
                                    Create Project
                                </Button>
                            )}
                        </Space>
                    </div>
                </Form>
            </Card>


        </div>
    );
};

export default ProjectStepperForm;