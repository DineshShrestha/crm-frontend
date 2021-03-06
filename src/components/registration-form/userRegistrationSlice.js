import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    status:"success",
    message: "asdf"
}

const userRegistrationSlice = createSlice({
    name:"userRegistration",
    initialState,
    reducers:{
        registrationPending:(state, action)=>{
            state.isLoading = true
        },
        registrationSuccess:(state, {payload})=>{
            state.isLoading = false
            state.status ='success'
            state.message = payload
        },
        registrationError:(state, {payload})=>{
            state.isLoading = false
            state.status ='error'
            state.message = payload
        },
        
    }
})


const {reducer, actions} = userRegistrationSlice

export const {
    registrationPending, 
    registrationSuccess,
    registrationError
} = actions
export default reducer