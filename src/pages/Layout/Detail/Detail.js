import React from 'react'

export default function Detail() {
    return (
        <section className="detail content-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="movie-info">
                            <h2>
                                Rise of Empires:
                                <br />
                                <strong>
                                    Ottoman
                                </strong>
                            </h2>
                            <ul className="features">
                                <li>
                                    <div className="rate">
                                        <svg className="circle-chart" viewBox="0 0 30 30" width={40} height={40} fill="transparent" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="circle-chart__background" stroke="#eee" strokeWidth={2} fill="none" cx={15} cy={15} r={14} />
                                            <circle className="circle-chart__circle" stroke="#4eb04b" strokeWidth={2} strokeDasharray="50,100" cx={15} cy={15} r={14} />
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    <span className="date">2020</span>
                                </li>
                            </ul>
                            <div className="description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia alias illum, eum rerum
                                totam nesciunt dolore quam ab officiis dolorum nostrum ex et accusantium iste ad ratione, at
                                vel quaerat?
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="movie-details">
                            <div className="movie-details--show">
                                <img src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2020/11/23/12703166829099531559154778789133760485896326o-1606125414499168579629.jpg" alt className="img-fluid" />
                            </div>
                            <ul className="movie-details--info">
                                <li className="key">
                                    Name
                                </li>
                                <li className="value">
                                    Nguyen ne
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
