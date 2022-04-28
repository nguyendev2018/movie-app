import { notification } from "antd";
import { userServices } from "../../services/UserServices/UserServices"
import { GET_ITEM_USER, GET_TYPE_USER, GET_USER, POST_INFO_USER } from "../contants/UserContant";

export const getUserAction = (taiKhoan = "") => {

    return async (dispatch) => {
        try {
            const { data } = await userServices.getUser(taiKhoan);
            console.log(data);
            dispatch({
                type: GET_USER,
                data: data.content
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export const getItemUserAction = (taiKhoan) => {
    return async (dispatch) => {
        try {
            const { data } = await userServices.AD_getItemUser(taiKhoan);

            dispatch({
                type: GET_ITEM_USER,
                data: data.content[0]
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export const getTypeUser = () => {
    return async (dispatch) => {
        try {
            const { data } = await userServices.AD_getTypeUser();
            dispatch({
                type: GET_TYPE_USER,
                data: data.content
            })
        } catch (error) {

        }
    }
}
export const UpdateItemUserAction = (form) => {
    return async (dispatch) => {
        try {
            const { data } = await userServices.AD_postItemUser(form);
            console.log(data);
            notification.info({
                message: "Success"
            })
        } catch (error) {
            notification.error({
                message: "Error"
            })
            console.log(error);
        }
    }
}
export const removeItemUserAction = (userName) => {
    return async (dispatch) => {
        try {
            let result = await userServices.AD_removeItemUser(userName);
            dispatch(getUserAction())
        } catch (error) {
            console.log(error);
        }
    }
}
export const infoUserAction = (infoUser) => {
    return async (dispatch) => {
        try {
            const { data } = await userServices.postInfoUser(infoUser);
            dispatch({
                type: POST_INFO_USER,
                data: data.content
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export const getInfoUserAction = () => {
    return async (dispatch) => {
        try {
            const result = await userServices.getHistoryTicket();
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
}