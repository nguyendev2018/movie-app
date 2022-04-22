import { userServices } from "../../services/UserServices/UserServices"
import { GET_USER } from "../contants/UserContant";

export const getUserAction = () => {
    return async (dispatch) => {
        try {
            const { data } = await userServices.getUser();

            dispatch({
                type: GET_USER,
                data: data.content
            })
        } catch (error) {
            console.log(error);
        }
    }
}