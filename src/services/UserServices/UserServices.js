import { GROUPID } from "../../utils/settingSystem";
import { BaseServices } from "../BaseServices";
export class UserServices extends BaseServices {
    constructor() {
        super()
    }
    signIn = (formLogin) => {
        return this.post(`QuanLyNguoiDung/DangNhap`, formLogin)
    }
    signUp = (formRegister) => {
        return this.post(`QuanLyNguoiDung/DangKy`, formRegister)
    }
    postInfoUser = (infoUser) => {
        return this.post(`QuanLyNguoiDung/ThongTinTaiKhoan`, infoUser)
    }
    getUser = (taiKhoan = "") => {
        if (taiKhoan != "") {
            return this.get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}&tuKhoa=${taiKhoan}`)

        } else {
            return this.get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`)


        }
    }
    getHistoryTicket = () => {
        return this.post(`QuanLyNguoiDung/ThongTinTaiKhoan`)
    }
    AD_getItemUser = (key) => {
        return this.get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}&tuKhoa=${key}`)
    }
    AD_getTypeUser = () => {
        return this.get(`QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`)
    }
    AD_postItemUser = (form) => {
        return this.post(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`, form)
    }
    AD_removeItemUser = (userName) => {
        return this.delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${userName}`)
    }
}

export const userServices = new UserServices()