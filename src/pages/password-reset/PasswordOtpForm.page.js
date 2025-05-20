import React, {useState} from 'react'

import {Container} from 'react-bootstrap'
//import LoginForm from '../../components/login/Login.comp'
import ResetPassword from '../../components/password-reset/PasswordReset.comp'
import './passwordOtpForm.style.css'
//workflow
//. create password reset page
//. add request OTP form
//. add redux store with Redux-Toolkit to handle the network status
//. Sent OTP to email from API(API already created)
//. Load form to input OTP and new password
//. New password must match to confirm password, form validation
//. Connect to API Endpoint (API is already created)
//. Add reducer through Redux toolkit to handle the network status and provide the feedback to the user
//. Send email, OTP and new password to update the password
export const PasswordOtpForm = () => {
    const [email, setEmail] = useState('rames@gmail.com');
    const [password, setPassword] = useState('pasord13');
    const [frmLoad, setFrmLoad] = useState('login');

   const handleOnChange = (e)=>{
        const {name, value} = e.target
        switch(name){
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
            default:
                break;
        }
        
    }

    const handleOnSubmit = (e)=>{
        e.preventDefault()
        if(!email || !password){
           return alert("Please fill in the form")
        }

        //todo call api to submit the form 
        console.log(email, password)
    }

    const handleOnResetSubmit = (e)=>{
        e.preventDefault()
        if(!email){
           return alert("Please enter email")
        }

        //todo call api to submit the form 
        console.log(email)
    }

    const formSwitcher = frmtype =>{
        setFrmLoad(frmtype)
    }
    return (
        <div className="entry-page bg-info">
            <Container fluid className="form-box">
              <ResetPassword 
                    handleOnResetSubmit={handleOnResetSubmit}
                         /> 
            </Container> 
        </div>
    )
}


