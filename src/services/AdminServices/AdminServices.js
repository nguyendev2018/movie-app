import { GROUPID } from "../../utils/settingSystem";
import { BaseServices } from "../BaseServices";
export class AdminServices extends BaseServices {
    constructor() {
        super()
    }
    AD_getListMovie = () => {
        return this.get(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }
    AD_removeMovie = (idMovie) => {
        return this.delete(`QuanLyPhim/XoaPhim?MaPhim=${idMovie}`)
    }
    AD_getItemMovie = (idMovie) => {
        return this.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${idMovie}`)
    }
    AD_postItemMovie = (formData) => {
        return this.post(`QuanLyPhim/ThemPhimUploadHinh`, formData)
    }
}
export const adminServices = new AdminServices()