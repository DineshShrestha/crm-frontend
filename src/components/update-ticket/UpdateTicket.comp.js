import React from 'react'
import { Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
const UpdateTicket= ({msg, handleOnChange, handleOnSubmit}) => {
    return (
        <div>
            <Form onSubmit={handleOnSubmit}>
                <Form.Label>Reply</Form.Label><br/>

                <Form.Text>Please reply your message here or update the ticket here</Form.Text>
                <Form.Control
                    as="textarea"
                    row='5'
                    name="detail"
                    value={msg}
                    onChange={handleOnChange}
                    />
                <div className="text-right mt-3 mb-3">
                    <Button variant="info" type="submit">Reply</Button>
                </div>
            </Form>
        </div>
    )
}

UpdateTicket.propTypes = {
    handleOnSubmit:PropTypes.func.isRequired,
    handleOnChange:PropTypes.func.isRequired,
    msg:PropTypes.string.isRequired
}
export default UpdateTicket