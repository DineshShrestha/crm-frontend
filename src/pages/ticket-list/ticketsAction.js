import { getAlltickets } from '../../api/ticketApi'
import { fetchTicketFail, fetchTicketLoading, fetchTicketSuccess, searchTickets } from './ticketsSlice'
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