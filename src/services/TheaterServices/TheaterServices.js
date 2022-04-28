import { BaseServices } from "../BaseServices";

export class TheaterServices extends BaseServices {
    constructor() {
        super()
    }
    //ADMIN
    getInforSystemMovie = () => {
        return this.get(`QuanLyRap/LayThongTinHeThongRap`)
    }
    getClusterTheater = (idTheater) => {
        return this.get(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${idTheater}`)
    }
    createCalendar = (form) => {
        return this.post(`QuanLyDatVe/TaoLichChieu`, form)
    }
    //Layout
    getInfoCalendarMovie = (maPhim) => {
        return this.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    }
}
export const theaterServices = new TheaterServices()