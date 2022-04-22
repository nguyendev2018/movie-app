import { BaseServices } from "../BaseServices";

export class TheaterServices extends BaseServices {
    constructor() {
        super()
    }
    getInforSystemMovie = () => {
        return this.get(`QuanLyRap/LayThongTinHeThongRap`)
    }
    getClusterTheater = (idTheater) => {
        return this.get(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${idTheater}`)
    }
    createCalendar = (form) => {
        return this.post(`QuanLyDatVe/TaoLichChieu`, form)
    }
}
export const theaterServices = new TheaterServices()