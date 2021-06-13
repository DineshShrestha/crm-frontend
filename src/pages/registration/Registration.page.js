import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import  RegistrationForm  from '../../components/registration-form/RegistrationForm.comp'

import "./registration.style.css"
export const Registration = () => {
    return (
        <div className="registration-page bg-info">
            <div className="mt-5">
            <Jumbotron className="form-box pb-3">
            <RegistrationForm/>
            </Jumbotron>
            </div>
        </div>
    )
}


