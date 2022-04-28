import { BaseServices } from "../../BaseServices";

export class MovieService extends BaseServices {
    constructor() {
        super()
    }
    getDetailMovie = (idMovie) => {
        return this.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${idMovie}`)
    }
}
export const movieService = new MovieService()