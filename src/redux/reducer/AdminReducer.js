import { GET_CLUSTER, GET_ITEM_FILM, GET_LIST_FILM, GET_THEATER } from "../contants/AdminContant";

const stateDefault = {
    arrFilm: [],
    itemFilm: {},
    arrTheater: [],
    arrCluster: []
}
export const AdminReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_LIST_FILM: {
            state.arrFilm = action.data
            return { ...state }
        }
        case GET_ITEM_FILM: {
            state.itemFilm = action.data;
            return { ...state }
        }
        //theater
        case GET_THEATER: {
            state.arrTheater = action.data;
            return { ...state }
        }
        case GET_CLUSTER: {
            state.arrCluster = action.data;
            return { ...state }
        }
        default:
            break;
    }
    return { ...state }
}