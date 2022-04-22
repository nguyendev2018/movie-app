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
    getUser = () => {
        return this.get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`)
    }
}

export const userServices = new UserServices()