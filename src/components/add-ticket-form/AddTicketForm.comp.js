import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Form, Jumbotron, Row, Button, Col, Spinner, Alert } from "react-bootstrap"
import {shortText} from '../../utils/validations'
//import PropTypes from 'prop-types'
import './add-ticket-form.style.css'
import { openNewTicket } from "./addTicketAction";
import { resetSuccessMsg } from "./addTicketSlicer";


const initialFrmDt = {
  subject:"",
  issueDate:"",
  message:""
}

const initialFrmError = {
  subject:false,
  issueDate:false,
  message:false
}
const AddTicketForm = () => {
  const dispatch = useDispatch()
  const {user:{name}} = useSelector(state=>state.user)
  
  const {isLoading, error, successMsg} = useSelector(state=>state.openTicket)
  const [frmData, setFrmData]= useState(initialFrmDt)
  const [frmDataError, setFrmDataError]= useState(initialFrmError)

  
  useEffect(()=>{
    return ()=>{
      successMsg && dispatch(resetSuccessMsg())
    }
  }, [frmData, frmDataError,dispatch])

  
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
 dispatch(openNewTicket({...frmData, sender:name}))
}

  return (
    <Jumbotron className="add-new-ticket mt-3 bg-light">
        <h1 className="text-info text-center">Add New Ticket</h1>
        <hr/>
        <div>
          {error && <Alert variant='danger'>{error}</Alert>}
          {successMsg && <Alert variant='success'>{successMsg}</Alert>}
          {isLoading && <Spinner variant='primary' animation="border"/>}
        </div>
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group  as={Row}>
          <Form.Label column sm={3}>Subject</Form.Label>
          <Col sm={9}>
          <Form.Control
            name="subject"
            value={frmData.subject}
            onChange={handleOnChange}
            placeholder='Subject'
            minLength="3"
            maxLength="100"
            required
          />
          <Form.Text className="t">{frmDataError.subject && "subject is required"}</Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>Issue Found</Form.Label>
          <Col sm={9}>  
          <Form.Control
            type="date"
            name="issueDate"
            value={frmData.issueDate}
            onChange={handleOnChange}
            required
          />
           </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>messages</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={frmData.message}
            onChange={handleOnChange}
            rows="5"
            required
          />
          <br />
        </Form.Group>
        <Button type="submit" variant="info" block>
          Open Ticket
        </Button>
      </Form>
    </Jumbotron>
  );
};


// AddTicketForm.propTypes = {
//     handleOnSubmit:PropTypes.func.isRequired,
//     handleOnChange:PropTypes.func.isRequired,
//     frmData:PropTypes.object.isRequired, 
// }

export default AddTicketForm;
