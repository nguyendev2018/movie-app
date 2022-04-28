import { DETAIL_ROM_TICKET, GET_LIST_ROM_TICKET, SET_TICKET } from "../contants/TicketContants";
import { InfoRomTicket } from "../../models/InfoRomTicket";
const stateDefault = {
    detailsRom: new InfoRomTicket(),
    listChairDoingSeat: []
}
export const TicketReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_LIST_ROM_TICKET:
            state.detailsRom = action.data;
            return { ...state }
            break;
        case SET_TICKET:
            // khong phai luc nao minh them vao danh sach dang dat vi co the nguoi ta se nhan nut huy nen no khong nam trong danh sach
            let listChairUpdate = [...state.listChairDoingSeat];
            // state.listChairDoingSeat = action.chair;
            // return { ...state };
            // break;
            let index = listChairUpdate.findIndex(chairWasSeat => chairWasSeat.maGhe === action.chair.maGhe);
            if (index != -1) {
                listChairUpdate.splice(index, 1)
            }
            else {
                listChairUpdate.push(action.chair)
            }
            return { ...state, listChairDoingSeat: listChairUpdate }
        default:
            break;
    }
    return { ...state }
}