import { adminServices } from "../../services/AdminServices/AdminServices"
import { GET_CLUSTER, GET_ITEM_FILM, GET_LIST_FILM, GET_THEATER } from "../contants/AdminContant";
import { notification } from "antd";
import { history } from "../../utils/history";
import { theaterServices } from "../../services/TheaterServices/TheaterServices";
export const getListMovieAction = () => {
    return async (dispatch) => {
        try {
            const { data } = await adminServices.AD_getListMovie();
            dispatch({
                type: GET_LIST_FILM,
                data: data.content
            })

        } catch (error) {
            console.log(error);
        }
    }
}
export const removeMovieAction = (idMovie) => {
    return async (dispatch) => {
        try {
            let result = await adminServices.AD_removeMovie(idMovie);
            console.log(result);
        } catch (error) {
            console.log(error);
        }

    }
}
export const getItemMovieAction = (idMovie) => {
    return async (dispatch) => {
        try {
            const { data } = await adminServices.AD_getItemMovie(idMovie);
            dispatch({
                type: GET_ITEM_FILM,
                data: data.content
            })
        } catch (error) {

        }
    }
}
export const postItemMovieAction = (formData) => {
    return async (dispatch) => {
        try {
            await adminServices.AD_postItemMovie(formData);
            notification.info({
                message: "ADD SUCCESS"
            })
            history.push('/admin/movie')
        } catch (error) {
            notification.error({
                message: " ERROR ADD "
            })
            console.log(error);
        }
    }
}
//ANCHOR Action Theater
export const getInforSystemMovieAction = () => {
    return async (dispatch) => {
        try {
            const { data } = await theaterServices.getInforSystemMovie();
            dispatch({
                type: GET_THEATER,
                data: data.content
            })
        } catch (error) {

        }
    }
}
export const getClusterTheaterAction = (value) => {
    return async (dispatch) => {
        try {
            const { data } = await theaterServices.getClusterTheater(value);
            dispatch({
                type: GET_CLUSTER,
                data: data.content
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export const postformCalendarAction = (form) => {
    return async (dispatch) => {
        try {
            let result = await theaterServices.postformCalendar(form);
            console.log(result);
        } catch (error) {

        }
    }
}