import { CardHeader } from '@/components/SharedComponent/CardHeader/CardHeader'
import { Flex } from 'antd'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <Flex justify='center' align='center'>
        <CardHeader
          title="Track every bid from RFP to submission with intelligent health monitoring and team collaboration"
          isButton={true}
          buttonText="New Bid Project"
          buttonIcon="📊"
          onClick={() => console.log('Create campaign clicked')}
          Cardwidth={"90%"}
        />
      </Flex>
    </div>
  )
}

export default Dashboard