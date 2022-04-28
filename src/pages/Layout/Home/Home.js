import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getListMovieAction } from '../../../redux/actions/ActionAdmin';
import { SET_FILM_COMING, SET_FILM_SHOW } from '../../../redux/contants/MovieContants';
import { GET_LIST_FILM } from '../../../redux/contants/AdminContant';
import moment from 'moment';
import Moment from 'react-moment';

export default function Home() {
    const { userLogin } = useSelector(state => state.UserReducer);
    const { arrFilm } = useSelector(state => state.AdminReducer);
    const { dangChieu, sapChieu } = useSelector(state => state.AdminReducer);
    let activeClassDC = dangChieu === true ? "active" : "";
    let activeClassSC = sapChieu === true ? "active " : ""
    const renderFilm = () => {
        return arrFilm.slice(0, 6).map((item, index) => {
            return <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                <div className="movie-menu">
                    <div className="movie-item">
                        <div className="movie-item--poster">
                            <NavLink to={`/home/detail/${item.maPhim}`}>
                                <img src={item.hinhAnh} alt className="img-100" />
                            </NavLink>
                        </div>
                        <div className="movie-item--content">
                            <div className="top">
                                <h5 className="title">
                                    <NavLink to={`/home/detail/${item.maPhim}`}>{item.tenPhim}</NavLink>
                                </h5>
                                <Moment date={item.ngayKhoiChieu} className="date" format="DD/MM/YYYY"></Moment>
                            </div>
                            <div className="bottom">
                                <ul>
                                    <li><span className="quanlity">HD</span></li>
                                    <li>
                                        <span className="duration"><i className="far fa-clock" />128 min</span>
                                        <span className="rating"><i className="far fa-heart" />3.5</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        })
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListMovieAction())
    }, [])

    // const [filter, setFilter] = useState(0);
    return (
        <section className="top-movie content-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center">
                            <span className="sub-title">
                                online streaming
                            </span>
                            <h2 className="title">Top rated movie</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8  button">
                        <div className=" movie-button">
                            <button className="active" onClick={() => {

                                dispatch(getListMovieAction())
                            }}>
                                ALL
                            </button>
                            <button className={activeClassDC} onClick={() => {
                                dispatch({
                                    type: SET_FILM_SHOW
                                })
                            }}>
                                Coming Soon
                            </button>
                            <button className={activeClassSC} onClick={() => {
                                dispatch({
                                    type: SET_FILM_COMING
                                })
                            }}>
                                Now Show
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row movie-filter">
                    {renderFilm()}
                </div>
            </div>
        </section>

    )
}
