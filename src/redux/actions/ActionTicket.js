import { InfoTicket } from "../../models/inForTicket";
import { ticketService } from "../../services/LayoutServices/TicketService/TicketService"
import { GET_LIST_ROM_TICKET } from "../contants/TicketContants";
export const getListRomTicketAction = (idCalendar) => {
    return async (dispatch) => {
        try {
            const { data } = await ticketService.getListRomTicket(idCalendar);

            dispatch({
                type: GET_LIST_ROM_TICKET,
                data: data.content
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export const bookTicketAction = (infoTicket) => {
    console.log(infoTicket);
    return async (dispatch) => {
        try {
            const result = await ticketService.bookTicket(infoTicket);

        } catch (error) {
            console.log(error);
        }
    }
}