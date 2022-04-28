import { GET_DETAIL_FILM_CLUSTER } from "../contants/MovieContants";

const stateDefault = {
    itemDetail: []
}
export const TheaterReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_DETAIL_FILM_CLUSTER: {
            state.itemDetail = action.filmDetail
            return { ...state }
        }

            break;

        default:
            break;
    }
    return { ...state }
}