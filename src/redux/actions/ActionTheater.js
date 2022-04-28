import { theaterServices } from "../../services/TheaterServices/TheaterServices";
import { GET_DETAIL_FILM, GET_DETAIL_FILM_CLUSTER } from "../contants/MovieContants";

export const getDetailMovieAction = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await theaterServices.getInfoCalendarMovie(id);
      dispatch({
        type: GET_DETAIL_FILM_CLUSTER,
        filmDetail: data.content
      })
    } catch (error) {
      console.log('error', error);
    }
  }
}