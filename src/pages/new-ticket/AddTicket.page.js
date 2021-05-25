import React, {useState, useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AddTicketForm from '../../components/add-ticket-form/AddTicketForm.comp'
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb.comp'
import {shortText} from '../../utils/validations'

const initialFrmDt = {
    subject:"",
    issueDate:"",
    detail:""
}

const initialFrmError = {
    subject:false,
    issueDate:false,
    detail:false
}
const AddTicket = () => {
    const [frmData, setFrmData]= useState(initialFrmDt)
    const [frmDataError, setFrmDataError]= useState(initialFrmError)
    useEffect(()=>{}, [frmData, frmDataError])

    const handleOnChange = (e)=>{
        const {name, value} = e.target    
        setFrmData({
            ...frmData,
            [name]:value, 
        })
    }

    const handleOnSubmit= async (e)=>{
     e.preventDefault()
     setFrmDataError(initialFrmError)
     
     const isSubjectValid = await shortText(frmData.subject)
    setFrmDataError({
         ...initialFrmError,
         subject:!isSubjectValid,
     })
     console.log('Form submitted reques received', frmData)   
    }
  
    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="New ticket"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddTicketForm 
                        handleOnChange={handleOnChange} 
                        frmData={frmData}
                        frmDataError ={frmDataError} 
                        handleOnSubmit={handleOnSubmit}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default AddTicket
