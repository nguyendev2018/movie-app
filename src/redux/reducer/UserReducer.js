import { TOKEN, USER_LOGIN } from "../../utils/settingSystem";
import { SIGN_IN } from "../contants/MovieContants";
import { GET_INFO_USER, GET_ITEM_USER, GET_TYPE_USER, GET_USER, LOGIN_LAYOUT, LOGIN_REDUCER } from "../contants/UserContant";

const stateDefault = {
    userLogin: {},
    arrUser: [],
    ItemUser: {},
    typeUser: [],
    inForUser: {}
}
export const UserReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case LOGIN_REDUCER: {
            const { data } = action;
            localStorage.setItem(USER_LOGIN, JSON.stringify(data));
            localStorage.setItem(TOKEN, JSON.stringify(data.accessToken));
            return { ...state, userLogin: data }
        }
        case GET_USER: {
            state.arrUser = action.data;
            return { ...state }
        }
        case GET_ITEM_USER: {
            state.ItemUser = action.data
            console.log(state.ItemUser);
            return { ...state }
        }
        case GET_TYPE_USER: {
            state.typeUser = action.data;
            return { ...state }
        }
        case GET_INFO_USER: {
            state.inForUser = action.data;
            return { ...state }
        }
        default:
            break;
    }
    return { ...state }
}