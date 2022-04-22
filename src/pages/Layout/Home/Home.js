import React from 'react'

export default function Home() {
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
                            <button className="active" data-filter="*">
                                ALL
                            </button>
                            <button className data-filter=".movie-coming">
                                Coming Soon
                            </button>
                            <button className data-filter=".movie-now">
                                Now Show
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row movie-filter">
                    <div className="col-xl-3 col-lg-4 col-sm-6 grid-sizer grid-item">
                        <div className="movie-menu">
                            <div className="movie-item">
                                <div className="movie-item--poster">
                                    <a href>
                                        <img src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2020/11/23/12703166829099531559154778789133760485896326o-1606125414499168579629.jpg" alt className="img-fluid" />
                                    </a>
                                </div>
                                <div className="movie-item--content">
                                    <div className="top">
                                        <h5 className="title">
                                            <a href>Movie All</a>
                                        </h5>
                                        <span className="date">2021</span>
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
                    <div className="col-xl-3 col-lg-4 col-sm-6 grid-sizer grid-item movie-coming">
                        <div className="movie-menu">
                            <div className="movie-item">
                                <div className="movie-item--poster">
                                    <a href>
                                        <img src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2020/11/23/12703166829099531559154778789133760485896326o-1606125414499168579629.jpg" alt className="img-fluid" />
                                    </a>
                                </div>
                                <div className="movie-item--content">
                                    <div className="top">
                                        <h5 className="title">
                                            <a href>Movie Coming</a>
                                        </h5>
                                        <span className="date">2021</span>
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
                    <div className="col-xl-3 col-lg-4 col-sm-6 grid-sizer grid-item movie-now">
                        <div className="movie-menu">
                            <div className="movie-item">
                                <div className="movie-item--poster">
                                    <a href>
                                        <img src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2020/11/23/12703166829099531559154778789133760485896326o-1606125414499168579629.jpg" alt className="img-fluid" />
                                    </a>
                                </div>
                                <div className="movie-item--content">
                                    <div className="top">
                                        <h5 className="title">
                                            <a href>Movie Now</a>
                                        </h5>
                                        <span className="date">2021</span>
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
                </div>
            </div>
        </section>

    )
}
