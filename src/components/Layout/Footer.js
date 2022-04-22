import React from 'react'

export default function Footer() {
    return (
        <div className="footer  content-padding">
            <div className="container">
                <div className="footer-menu--wrap">
                    <div className="row">
                        <div className="col-md-3 text-center text-md-left">
                            <a href>
                                <img src={require('../../assets/images/logo.png')} alt className="logo" />
                            </a>
                        </div>
                        <div className="col-md-9">
                            <div className="wrap-list">
                                <ul className="wrap-list--menu">
                                    <li> <a href>Home</a> </li>
                                    <li> <a href>Movie</a> </li>
                                    <li> <a href>Home</a> </li>
                                    <li> <a href>Home</a> </li>
                                </ul>
                                <div className="wrap-list--search">
                                    <form action>
                                        <input type="text" placeholder="Find Favorite Movie " />
                                        <button>
                                            <i className="fas fa-search" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-menu--link">
                    <div className="row align-items-center">
                        <div className="col-md-8 ">
                            <ul className="list-links">
                                <li> <a href>FAQ</a> </li>
                                <li> <a href>HELP CENTER</a> </li>
                                <li> <a href>TERMS OF USE</a> </li>
                                <li> <a href>PRIVACY</a> </li>
                            </ul>
                        </div>
                        <div className="col-md-4 text-md-right ">
                            <ul className="list-icon">
                                <li className="item-icon">
                                    <a href>
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li className="item-icon">
                                    <a href>
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li className="item-icon">
                                    <a href>
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li className="item-icon">
                                    <a href>
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
