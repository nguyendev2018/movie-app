import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div className="header">
            <div className="header-menu ">
                <div className="container container-flex">
                    <a href>
                        <img src={require('../../assets/images/logo.png')} alt className="logo" />
                    </a>
                    <div className="header-menu--list">
                        <div className=" header-left button icon-bars">
                            <i className="fal fa-bars" />
                        </div>
                        <ul className="header-mobile header-menu--list_item">
                            <div className="box-close icon-bars">
                                <i className="box-close--icon far fa-times" />
                            </div>
                            <a href>
                                <img src={require('../../assets/images/logo.png')} alt className="logo" />
                            </a>
                            <li className="item-first item-dropdown resize color-hover">
                                <a href className> Home
                                </a>
                                <div className="box-icon">
                                    <i className="fal icon icon-down fa-chevron-down" />
                                </div>
                                <ul className="dropdown">
                                    <li className="item-second dropdown-hover  item-dropdown color-hover">
                                        <div className="box-icon">
                                            <i className="fal icon icon-down fa-chevron-down" />
                                        </div>
                                        <a href>
                                            Home 1
                                        </a>
                                        <ul className="dropdown-second">
                                            <li className="item-third dropdown-hover"><a href className="color-hover">Home
                                                Children1</a></li>
                                            <li className=" item-third dropdown-hover"><a href className="color-hover">Home
                                                Children1</a></li>
                                            <li className=" item-third dropdown-hover"><a href className="color-hover">Home
                                                Children1</a></li>
                                            <li className=" item-third dropdown-hover"><a href className="color-hover">Home
                                                Children1</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-hover item-second color-hover">
                                        <a href>
                                            Home 2
                                        </a>
                                        <ul className="dropdown-second">
                                            <li className="item-third dropdown-hover color-hover"><a href>Home
                                                Children2</a></li>
                                            <li className="item-third dropdown-hover color-hover"><a href>Home
                                                Children2</a></li>
                                            <li className="item-third dropdown-hover color-hover"><a href>Home
                                                Children2</a></li>
                                            <li className="item-third dropdown-hover color-hover"><a href>Home
                                                Children2</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="item-first item-dropdown resize color-hover">
                                <a href className> Home
                                </a>
                                <div className="box-icon">
                                    <i className="fal icon icon-down fa-chevron-down" />
                                </div>
                                <ul className="dropdown">
                                    <li className="item-second dropdown-hover  item-dropdown color-hover">
                                        <div className="box-icon">
                                            <i className="fal icon icon-down fa-chevron-down" />
                                            <i className="fal icon icon-up fa-chevron-up" />
                                        </div>
                                        <a href>
                                            Home 1
                                        </a>
                                        <ul className="dropdown-second">
                                            <li className="item-third dropdown-hover"><a href className="color-hover">Home
                                                Children1</a></li>
                                            <li className=" item-third dropdown-hover"><a href className="color-hover">Home
                                                Children1</a></li>
                                            <li className=" item-third dropdown-hover"><a href className="color-hover">Home
                                                Children1</a></li>
                                            <li className=" item-third dropdown-hover"><a href className="color-hover">Home
                                                Children1</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-hover item-second color-hover">
                                        <a href>
                                            Home 2
                                        </a>
                                        <ul className="dropdown-second">
                                            <li className="item-third dropdown-hover color-hover"><a href>Home
                                                Children2</a></li>
                                            <li className="item-third dropdown-hover color-hover"><a href>Home
                                                Children2</a></li>
                                            <li className="item-third dropdown-hover color-hover"><a href>Home
                                                Children2</a></li>
                                            <li className="item-third dropdown-hover color-hover"><a href>Home
                                                Children2</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="header-menu--action">
                        <ul>
                            <li className="search">
                                <i className="fal fa-search" />
                            </li>
                            <li className="language">
                                <i className="fal fa-globe" />
                                <select name id="lang-dropdown">
                                    <option value>EN</option>
                                    <option value>AU</option>
                                    <option value>VN</option>
                                </select>
                            </li>
                            <li className="sign-in">
                                <NavLink to='/login'>Sign in</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-slider">
                <div className="main-slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="slide-inner" data-background="https://i.ytimg.com/vi/zxvHV58lp6s/maxresdefault.jpg">
                                <div className="container content" data-swiper-parallax={200}>
                                    <h6 className="tagline">NEW RELEASES</h6>
                                    <h2 className="name">The Rise of<br />
                                        <strong>Football</strong>
                                    </h2>
                                    <ul className="features">
                                        <li>
                                            <div className="rate">
                                                <svg className="circle-chart" viewBox="0 0 30 30" width={40} height={40} xmlns="http://www.w3.org/2000/svg">
                                                    <circle className="circle-chart__background" stroke="#2f3439" strokeWidth={2} fill="none" cx={15} cy={15} r={14} />
                                                    <circle className="circle-chart__circle" stroke="#4eb04b" strokeWidth={2} strokeDasharray="50,100" cx={15} cy={15} r={14} />
                                                </svg>
                                                <b>5.4</b>
                                            </div>
                                            {'{'}/* end rate */{'}'}
                                        </li>
                                        <li>
                                            <div className="year">2020</div>
                                        </li>
                                        <li>
                                            <div className="hd">4K <b>ULTRA HD</b></div>
                                        </li>
                                        <li>
                                            <div className="tags">Romance, Action</div>
                                        </li>
                                    </ul>
                                    <p className="description">
                                        'The Football' follows Dee Dee Allen and Barry Glickman <br />who are New York City stage stars.
                                    </p>
                                    <div className="d-flex mt-3">
                                        <a href="movie-single.html" className="button-form mr-3"> <span>WATCH TRAILER</span> </a>
                                        <a href="account.html" className="add-btn">+</a>
                                    </div>
                                </div>
                                {'{'}/* end container  */{'}'}
                            </div>

                        </div>
                        <div className="swiper-slide">
                            <div className="slide-inner" data-background="https://i.ytimg.com/vi/zxvHV58lp6s/maxresdefault.jpg">
                                <div className="container content" data-swiper-parallax={200}>
                                    <h6 className="tagline">NEW RELEASES</h6>
                                    <h2 className="name">The Rise of<br />
                                        <strong>Football</strong>
                                    </h2>
                                    <ul className="features">
                                        <li>
                                            <div className="rate">
                                                <svg className="circle-chart" viewBox="0 0 30 30" width={40} height={40} xmlns="http://www.w3.org/2000/svg">
                                                    <circle className="circle-chart__background" stroke="#2f3439" strokeWidth={2} fill="none" cx={15} cy={15} r={14} />
                                                    <circle className="circle-chart__circle" stroke="#4eb04b" strokeWidth={2} strokeDasharray="50,100" cx={15} cy={15} r={14} />
                                                </svg>
                                                <b>5.4</b>
                                            </div>
                                            {'{'}/* end rate */{'}'}
                                        </li>
                                        <li>
                                            <div className="year">2020</div>
                                        </li>
                                        <li>
                                            <div className="hd">4K <b>ULTRA HD</b></div>
                                        </li>
                                        <li>
                                            <div className="tags">Romance, Action</div>
                                        </li>
                                    </ul>
                                    <p className="description">
                                        'The Football' follows Dee Dee Allen and Barry Glickman <br />who are New York City stage stars.
                                    </p>
                                    <div className="d-flex mt-3">
                                        <a href="movie-single.html" className="button-form mr-3"> <span>WATCH TRAILER</span> </a>
                                        <a href="account.html" className="add-btn">+</a>
                                    </div>
                                </div>
                                {'{'}/* end container */{'}'}
                            </div>

                        </div>
                        <div className="swiper-slide">
                            <div className="slide-inner" data-background="https://i.ytimg.com/vi/zxvHV58lp6s/maxresdefault.jpg">
                                <div className="container content" data-swiper-parallax={200}>
                                    <h6 className="tagline">NEW RELEASES</h6>
                                    <h2 className="name">The Rise of<br />
                                        <strong>Football</strong>
                                    </h2>
                                    <ul className="features">
                                        <li>
                                            <div className="rate">
                                                <svg className="circle-chart" viewBox="0 0 30 30" width={40} height={40} xmlns="http://www.w3.org/2000/svg">
                                                    <circle className="circle-chart__background" stroke="#2f3439" strokeWidth={2} fill="none" cx={15} cy={15} r={14} />
                                                    <circle className="circle-chart__circle" stroke="#4eb04b" strokeWidth={2} strokeDasharray="50,100" cx={15} cy={15} r={14} />
                                                </svg>
                                                <b>5.4</b>
                                            </div>
                                            {'{'}/* end rate */{'}'}
                                        </li>
                                        <li>
                                            <div className="year">2020</div>
                                        </li>
                                        <li>
                                            <div className="hd">4K <b>ULTRA HD</b></div>
                                        </li>
                                        <li>
                                            <div className="tags">Romance, Action</div>
                                        </li>
                                    </ul>
                                    <p className="description">
                                        'The Football' follows Dee Dee Allen and Barry Glickman <br />who are New York City stage stars.
                                    </p>
                                    <div className="d-flex mt-3">
                                        <a href="movie-single.html" className="button-form mr-3"> <span>WATCH TRAILER</span> </a>
                                        <a href="account.html" className="add-btn">+</a>
                                    </div>
                                </div>
                                {'{'}/* end container */{'}'}
                            </div>

                        </div>

                    </div>

                    <div className="swiper-pagination" />

                </div>
            </div>
        </div>

    )
}
