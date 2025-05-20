import React,{useState, useEffect} from "react";
import { Button, Col, Container, Form, Row, Spinner, Alert } from "react-bootstrap";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from 'react-redux'
import { loginPending, loginSuccess, loginFail } from './loginSlice'
import {userLogin} from '../../api/userApi'
import {useNavigate} from 'react-router-dom'

import {getUserProfile} from '../../pages/dashboard/userActions'
const LoginForm = ({ formSwitcher }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const {isLoading,isAuth, error} = useSelector(state=>state.login)
    useEffect(()=>{
      (sessionStorage.getItem('accessJWT')) && navigate('/dashboard')
    },[ navigate, isAuth])
  const [email, setEmail] = useState("rames@gmail.com");
  const [password, setPassword] = useState("pasord123");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit =async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Please fill in the form");
    }

    dispatch(loginPending())

    //call APi
    try {
        
        const isAuth = await userLogin({email, password})
        if(isAuth.status === 'error'){
            return dispatch(loginFail(isAuth.message))
        }
        dispatch(loginSuccess())
        dispatch(getUserProfile())
        navigate("/dashboard")
    } catch (error) {
       dispatch(loginFail(error.message)) 
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client login</h1>
          <hr />
          {error && <Alert variant="danger">{error}</Alert>}
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
                value={password}
                placeholder="Enter password"
                required
              />
              <br />
            </Form.Group>
            <Button type="submit">Login</Button>
            {isLoading && <Spinner variant="primary" animation="border"/>}
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="/password-reset">Forget Password?</a>
        </Col>
      </Row>
      <Row className="py-4">
        <Col>
        Are you new here? {' '}
          <a href="/registration">Register now</a>
        </Col>
      </Row>
      <br />
    </Container>
  );
};

LoginForm.propTypes = {

  formSwitcher: PropTypes.func.isRequired,
 
};

export default LoginForm;
