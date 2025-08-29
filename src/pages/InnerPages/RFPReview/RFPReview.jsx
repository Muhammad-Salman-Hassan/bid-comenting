import React, { useState } from 'react'
import { RFPReviewUpload } from './DocumentUploadRFP/UplaodFile'
import { Flex } from 'antd';
import { CardHeader } from '@/components/SharedComponent/CardHeader/CardHeader';
import BackButton from '@/components/SharedComponent/BackButton/BackButton';

const RFPReview = () => {
    const [files, setFiles] = useState([]);

    const handleFilesChange = (newFiles) => {
      setFiles(newFiles);
      console.log('Files changed:', newFiles);
    };
    return (
        <div>
             <Flex justify='center' align='center'>
                <CardHeader
                    title="RFP Review"
                    isButton={false}
                    Cardwidth={"90%"}
                />


            </Flex>
            <BackButton/>
            
            <RFPReviewUpload
                title="Upload RFP Documents"
                acceptedTypes=".pdf,.doc,.docx"
                maxSize={25}
                onFilesChange={handleFilesChange}
                initialFiles={[
                    {
                        uid: '1',
                        name: 'Blank-Template-reports.pdf',
                        size: 201216, // 196.50 KB
                        uploadTime: new Date('2025-08-07T22:50:00'),
                        status: 'done'
                    },
                    {
                        uid: '2',
                        name: 'Picto1_specs.pdf',
                        size: 180838, // 176.56 KB
                        uploadTime: new Date('2025-08-07T23:30:00'),
                        status: 'done'
                    }
                ]}
            />
        </div>
    )
}

export default RFPReview