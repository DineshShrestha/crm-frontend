import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'

const LoginForm = ({handleOnChange, email, pass, handleOnSubmit, formSwitcher}) => {
    return (
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-info text-center">Client login</h1>
                        <hr/>
                        <Form autoComplete="off" onSubmit={handleOnSubmit}>
                            <Form.Group>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={handleOnChange}
                                    placeholder="Enter email"  
                                   required
                                    />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    onChange={handleOnChange}
                                    value={pass}
                                    placeholder="Enter password"
                                    required
                                    /><br/>
                            </Form.Group>
                            <Button type="submit" >Login</Button>
                        </Form>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <a href="#!" onClick={()=>formSwitcher('reset')}>Forget Password?</a>
                    </Col>
                </Row><br/>
            </Container>
    )
}

LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    pass:PropTypes.string.isRequired
};

export default LoginForm
