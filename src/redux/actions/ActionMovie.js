import { movieService } from "../../services/LayoutServices/MovieService/MovieService"
import { GET_DETAIL_FILM } from "../contants/MovieContants";

export const getDetailMovieAction = (idMovie) => {
    return async (dispatch) => {
        try {
            const { data } = await movieService.getDetailMovie(idMovie);
            dispatch({
                type: GET_DETAIL_FILM,
                data: data.content
            })
        } catch (error) {

        }
    }

}