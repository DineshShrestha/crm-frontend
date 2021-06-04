import { getAlltickets, getSingleTicket, updateReplyTicket, updateReplyTicketStatusClosed } from '../../api/ticketApi'
import {
    fetchTicketFail,
    fetchTicketLoading,
    fetchTicketSuccess,
    searchTickets,
    fetchSingleTicketFail,
    fetchSingleTicketLoading,
    fetchSingleTicketSuccess,
    replyTicketLoading,
    replyTicketSuccess,
    replyTicketFail,
    closeTicketLoading,
    closeTicketSuccess,
    closeTicketFail

} from './ticketsSlice'


export const fetchAllTickets = () => async(dispatch) => {

    dispatch(fetchTicketLoading())

    try {
        //fetch data from API
        const result = await getAlltickets()
        console.log(result)
        dispatch(fetchTicketSuccess(result.data.result))
    } catch (error) {
        dispatch(fetchTicketFail(error.message))
    }

}

export const filterSearchTicket = str => dispatch => {
    dispatch(searchTickets(str))
}


//Actions for single ticket only
export const fetchSingleTicket = (_id) => async(dispatch) => {

    dispatch(fetchSingleTicketLoading())

    try {
        //fetch data from API
        const result = await getSingleTicket(_id)

        dispatch(fetchSingleTicketSuccess(result.data.result.length && result.data.result[0]))
    } catch (error) {
        dispatch(fetchSingleTicketFail(error.message))
    }

}


//Actions for reply on single ticket only
export const replyOnTicket = (_id, msgObj) => async(dispatch) => {

    dispatch(replyTicketLoading())

    try {
        //fetch data from API
        const result = await updateReplyTicket(_id, msgObj)
        console.log(result)
        if (result.status === 'error') {
            return dispatch(replyTicketFail(result.message))
        }
        dispatch(fetchSingleTicket(_id))
        dispatch(replyTicketSuccess(result.message))
    } catch (error) {
        dispatch(replyTicketFail(error.message))
    }

}

//Actions for closing the ticket

export const closeTicket = (_id) => async(dispatch) => {

    dispatch(closeTicketLoading())

    try {
        //fetch data from API
        const result = await updateReplyTicketStatusClosed(_id)
        console.log(result)
        if (result.status === 'error') {
            return dispatch(closeTicketFail(result.message))
        }
        dispatch(fetchSingleTicket(_id))
        dispatch(closeTicketSuccess(result.message))
    } catch (error) {
        dispatch(closeTicketFail(error.message))
    }

}