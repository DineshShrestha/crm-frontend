import {registrationPending, registrationError, registrationSuccess} from './userRegistrationSlice'
import {userRegistration} from '../../api/userApi'

export const NewUserRegistration = (frmData)=>async dispatch =>{
   
    try {
         // call api

         dispatch(registrationPending())
         const result = await userRegistration(frmData)
         result.status === 'success' ?  dispatch(registrationSuccess(result.message)):dispatch(registrationError(result.message))
       
         console.log(result)
    // receive feedback from server
    // update redux store
    dispatch(registrationSuccess(result.message))

    } catch (error) {
        dispatch(registrationError(error.message))
    }

}