import React from "react";
import { Form, Jumbotron, Row, Button, Col } from "react-bootstrap"
import PropTypes from 'prop-types'
import './add-ticket-form.style.css'

const AddTicketForm = ({ handleOnSubmit, handleOnChange, frmData, frmDataError }) => {
  return (
    <Jumbotron className="add-new-ticket mt-3 bg-light">
        <h1 className="text-info text-center">Add New Ticket</h1>
        <hr/>
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
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            name="detail"
            value={frmData.detail}
            onChange={handleOnChange}
            rows="5"
            required
          />
          <br />
        </Form.Group>
        <Button type="submit" variant="info" block>
          submit
        </Button>
      </Form>
    </Jumbotron>
  );
};


AddTicketForm.propTypes = {
    handleOnSubmit:PropTypes.func.isRequired,
    handleOnChange:PropTypes.func.isRequired,
    frmData:PropTypes.object.isRequired, 
}

export default AddTicketForm;
