
import { CardHeader } from '@/components/SharedComponent/CardHeader/CardHeader'
import { Flex } from 'antd'
import React from 'react'
import ProjectTimeline from './ProjectTimeline/ProjectTimeline';

const TaskTrack = () => {
    const sampleTimelineData = [
        {
            id: 1,
            title: "Project Information Sheet",
            dueDate: "Due 08/13/2025",
            status: "Complete"
        },
        {
            id: 2,
            title: "RFP Review",
            dueDate: "Due 08/13/2025",
            status: "In Progress"
        },
        {
            id: 3,
            title: "Subtenders & Suppliers",
            dueDate: "Due 08/13/2025",
            status: "Pending"
        },
        {
            id: 4,
            title: "Bid Invite",
            dueDate: "Due 08/13/2025",
            status: "Pending"
        },
        {
            id: 5,
            title: "Take Off",
            dueDate: "Due 08/13/2025",
            status: "Pending"
        },
        {
            id: 6,
            title: "Schedule",
            dueDate: "Due 08/13/2025",
            status: "Pending"
        },
        {
            id: 7,
            title: "Estimate",
            dueDate: "Due 08/13/2025",
            status: "Pending"
        }
    ];
    return (
        <div>
            <Flex justify='center' align='center'>
                <CardHeader
                    title="Task Track"
                    isButton={false}
                    Cardwidth={"90%"}
                />


            </Flex>
            <div style={{ padding: '20px' }}>
                <ProjectTimeline timelineData={sampleTimelineData} />
            </div>

        </div>
    )
}

export default TaskTrack