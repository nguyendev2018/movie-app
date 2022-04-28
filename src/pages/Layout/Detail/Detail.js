import { Rate } from 'antd';
import React, { useEffect } from 'react'
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux'
import { getItemMovieAction } from '../../../redux/actions/ActionAdmin';
import "../../../assets/styles/circle.css";
import { Tabs, Radio, Space } from 'antd';
import { getDetailMovieAction } from '../../../redux/actions/ActionTheater';
import { NavLink } from 'react-router-dom';

import moment from 'moment';

export default function Detail(props) {
    const state = {
        tabPosition: 'left',
    };
    const { tabPosition } = state;

    const { TabPane } = Tabs;


    const dispatch = useDispatch();
    const { itemDetail } = useSelector(state => state.TheaterReducer);
    console.log(itemDetail);
    useEffect(() => {
        let { id } = props.match.params;
        dispatch(getDetailMovieAction(id))
    }, [])
    return (
        <section className="detail content-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="movie-info">
                            <h2>
                                {itemDetail.tenPhim}
                                <br />
                                <strong>
                                    Ottoman
                                </strong>
                            </h2>
                            <div className='d-flex'>
                                <ul className="features">
                                    <li>
                                        <div className="rate">
                                            <div className='c100 p50 small'>

                                                <span>{itemDetail.danhGia * 10}%</span>
                                                <div className='slice '>
                                                    <div className='bar'>
                                                    </div>
                                                    <div className='fill'>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <Moment date={itemDetail.ngayKhoiChieu} className="date" format="DD/MM/YYYY"></Moment>
                                    </li>

                                </ul>
                                <Rate allowHalf value={itemDetail.danhGia / 2}></Rate>

                            </div>
                            <div className="description">
                                {itemDetail.moTa}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="movie-details">
                            <div className="movie-details--show">
                                <img src={itemDetail.hinhAnh} className="img-fluid" />
                            </div>
                            <ul className="movie-details--info">
                                <li className="key">
                                    Name
                                </li>
                                <li className="value">
                                    {itemDetail.tenPhim}
                                </li>

                            </ul>
                            <ul className="movie-details--info">
                                <li className="key">
                                    Date
                                </li>
                                <li className="value">
                                    <Moment date={itemDetail.ngayKhoiChieu} className="date" format="DD/MM/YYYY"></Moment>
                                </li>

                            </ul>
                            <ul className="movie-details--info">
                                <li className="key">
                                    Rate
                                </li>
                                <li className="value">
                                    {itemDetail.danhGia}/10
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className='col-12'>
                        <iframe width="100%" height="500" src={itemDetail.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className='row'>
                    <Tabs style={{ width: "100%" }} defaultActiveKey='1' centered>
                        <TabPane tab="Calendar" key="1">
                            <div className='mt-20 '>
                                <Tabs tabPosition='left'>
                                    {itemDetail.heThongRapChieu?.map((htr, index) => {
                                        return <TabPane
                                            tab={<div>
                                                <img src={htr.logo} width={50} height={50} alt={htr.logo} />
                                                <span style={{ textTransform: "capitalize", fontWeight: 500, marginLeft: "10px" }}>{htr.tenHeThongRap}</span>
                                            </div>}
                                            key={index}>
                                            {htr.cumRapChieu?.map((cumRap, index) => {
                                                return <div key={index}>
                                                    <div className='d-flex flex-row '>
                                                        <img style={{ width: 60, height: 60 }} src={cumRap.hinhAnh} />
                                                        <ul className='ml-3'>
                                                            <li>
                                                                {cumRap.tenCumRap}
                                                            </li>
                                                            <li className='mt-2'>
                                                                {cumRap.diaChi}
                                                            </li>
                                                        </ul>

                                                    </div>
                                                    <div className='info-calendar mt-3 mb-3'>
                                                        {cumRap.lichChieuPhim?.slice(0, 12).map((item, index) => {
                                                            return <div className='info-calender--link '>
                                                                <NavLink className="" to={`/checkout/${item.maLichChieu}`} key={index}>
                                                                    {moment(item.ngayChieuGioChieu).format('hh:mm A')}
                                                                </NavLink>
                                                            </div>
                                                        })}
                                                    </div>
                                                </div>

                                            })}
                                        </TabPane>
                                    })}
                                </Tabs>

                            </div>
                        </TabPane>
                        <TabPane tab="Information" key="2" ></TabPane>
                    </Tabs>

                </div>
            </div>
        </section >

    )
}
