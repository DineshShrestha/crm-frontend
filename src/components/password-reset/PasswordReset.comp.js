import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'

const ResetPassword = ({handleOnChange, email, handleOnResetSubmit, formSwitcher}) => {
    return (
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-info text-center">Reset Password</h1>
                        <hr/>
                        <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
                            <Form.Group>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={handleOnChange}
                                    placeholder="Enter email"  
                                   required
                                    /><br/>
                            </Form.Group>
                            
                            <Button type="submit" >Reset Password</Button>
                        </Form>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <a href="#!" onClick={()=>formSwitcher("login")}>Login now</a>
                    </Col>
                </Row><br/>
            </Container>
    )
}

ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
 
};

export default ResetPassword
