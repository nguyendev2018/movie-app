import { InfoTicket } from '../../../models/inForTicket'
import { BaseServices } from '../../BaseServices'
export class TicketService extends BaseServices {
    constructor() {
        super()
    }
    getListRomTicket = (idCalendar) => {
        return this.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${idCalendar}`)
    }
    bookTicket = (infoTicket) => {
        console.log(infoTicket);
        return this.post(`QuanLyDatVe/DatVe`, infoTicket);
    }
}
export const ticketService = new TicketService()