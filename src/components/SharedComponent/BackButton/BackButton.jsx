import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router'

const BackButton = () => {
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <Button onClick={handleGoBack} className='go-back' style={{ marginBottom: "1rem" }}>Back</Button>
    )
}

export default BackButton