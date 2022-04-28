import { GET_CLUSTER, GET_ITEM_FILM, GET_LIST_FILM, GET_THEATER } from "../contants/AdminContant";
import { GET_DETAIL_FILM, SET_FILM_COMING, SET_FILM_SHOW } from "../contants/MovieContants";

const stateDefault = {
    arrFilm: [],
    arrFilmDefault: [],
    itemFilm: {},
    arrTheater: [],
    arrCluster: [],
    dangChieu: false,
    sapChieu: false,
    arrdangChieu: [],

}
export const AdminReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_LIST_FILM: {
            state.arrFilm = action.data
            state.arrFilmDefault = action.data;
            return { ...state }
        }
        case GET_ITEM_FILM: {
            state.itemFilm = action.data;

            return { ...state }
        }
        case SET_FILM_SHOW: {
            state.dangChieu = !state.dangChieu
            state.arrFilm = state.arrFilmDefault.filter(film => film.dangChieu === state.dangChieu);
            return { ...state }
        }
        case SET_FILM_COMING: {
            state.sapChieu = !state.sapChieu
            state.arrFilm = state.arrFilmDefault.filter(film => film.sapChieu == state.sapChieu);
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