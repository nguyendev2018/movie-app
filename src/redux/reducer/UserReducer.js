import { GET_USER } from "../contants/UserContant";

const stateDefault = {
    arrUser: []
}
export const UserReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_USER: {
            state.arrUser = action.data;
            return { ...state }
        }
        default:
            break;
    }
    return { ...state }
}