import React, {useState} from 'react'
import './entry.style.css'
import {Container} from 'react-bootstrap'
import LoginForm from '../../components/login/Login.comp'
import ResetPassword from '../../components/password-reset/PasswordReset.comp'

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
export const Entry = () => {
    const [frmLoad, setFrmLoad] = useState('login');

    const handleOnResetSubmit = (e)=>{
        e.preventDefault()
       
    }

    const formSwitcher = frmtype =>{
        setFrmLoad(frmtype)
    }
    return (
        <div className="entry-page bg-info">
            <Container className="form-box">
                {frmLoad === 'login' && (<LoginForm 
                   
                   
                    formSwitcher={formSwitcher}
                />)} 
                {frmLoad==='reset' && (<ResetPassword 
                    //handleOnChange={handleOnChange}
                    //email={email} 
                    handleOnResetSubmit={handleOnResetSubmit}
                    formSwitcher={formSwitcher}
                /> )}
            </Container> 
        </div>
    )
}


