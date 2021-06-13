import React, {useState, useEffect} from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const initialState = {
    name:'',
    phone:'',
    email:'',
    company:'',
    address:'',
    password:'',
    confirmPass:'',
}
const passVerification = {
    isLengthy:false,
    hasUpper:false,
    hasLower:false,
    hasSpclChar:false,
    hasNumber:false,
    confirmPass:false
}
export const RegistrationForm = () => {
  
    const [newUser, setNewUser] = useState('')
    
    const [passwordError, setpasswordError] = useState(passVerification)
    useEffect(()=>{}, [newUser])
    const handleOnChange = (e)=>{
        const {name, value} = e.target

        setNewUser({...newUser, [name]: value})
        if(name=== "password"){
            const isLengthy= value.length >8 
            const hasUpper= /[A-Z]/.test(value)
            const hasLower= /[a-z]/.test(value)
            const hasNumber= /[0-9]/.test(value)
            const hasSpclChar= /[@,$,%,&]/.test(value)
          setpasswordError({...passwordError, isLengthy, hasUpper, hasLower, hasNumber, hasSpclChar})
        }

        if(name=== "confirmPass"){
            setpasswordError({...passwordError, 
                                confirmPass: newUser.password === value})
            passVerification.confirmPass= true
        }

    }

    const handleOnSubmit = (e)=>{
      e.preventDefault()
      console.log(newUser)
    }

  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 className="text-info">User Registration</h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group >
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" name="name" value={newUser.name} onChange={handleOnChange} placeholder="Your name" />
            </Form.Group>
            <Form.Group >
              <Form.Label>Phone</Form.Label>
              <Form.Control type="number" name="phone" value={newUser.phone} onChange={handleOnChange} placeholder="Enter Phone number" />
            </Form.Group>
            <Form.Group >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email"  value={newUser.email} onChange={handleOnChange} placeholder="Enter email" />
            </Form.Group>
            <Form.Group >
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" name="company" value={newUser.company}  onChange={handleOnChange} placeholder="Company Name" />
            </Form.Group>
            <Form.Group >
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" name="address" value={newUser.address} onChange={handleOnChange} placeholder="Enter Phone number" />
            </Form.Group>
           

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value={newUser.password} onChange={handleOnChange} placeholder="Password" />
            </Form.Group>
           
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" name="ConfirmPass" value={newUser.confirmPass} onChange={handleOnChange} placeholder="Confirm Password" />
            </Form.Group>
            <Form.Text>
                {passwordError.confirmPass && ( <div className="text-danger mb-3">Password did not match</div> )}
            </Form.Text>
            <ul className="mb-4 mt-2">
                <li className={passwordError.isLengthy ? "text-success": "text-danger"}>Min 8 characters</li>
                <li className={passwordError.hasUpper ? "text-success": "text-danger"}>Atleast one Uppercase</li>
                <li className={passwordError.hasLower ? "text-success": "text-danger"}>At least one lower case</li>
                <li className={passwordError.hasNumber ? "text-success": "text-danger"}>At least one number</li>
                <li className={passwordError. hasSpclChar ? "text-success": "text-danger"}>At least one of the special character i.e. @ # $ %</li>
            </ul>
            <Button variant="primary" type="submit" className="mt-3" disabled={Object.values(passwordError).includes(false)}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="py-4">
        <Col>
          Already have an account ? <a href="/">Login Now</a>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;
