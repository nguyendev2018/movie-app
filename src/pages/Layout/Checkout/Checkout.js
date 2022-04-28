import { Button, Tabs } from 'antd';
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bookTicketAction, getListRomTicketAction } from '../../../redux/actions/ActionTicket';
import { LOGIN_REDUCER } from '../../../redux/contants/UserContant';
import { CloseOutlined } from '@ant-design/icons'
import style from "./Checkout.module.css"
import { SET_TICKET } from '../../../redux/contants/TicketContants';
import _ from "lodash";
import { InfoTicket } from '../../../models/inForTicket';


import {
    CheckOutlined
} from '@ant-design/icons';
import { getInfoUserAction } from '../../../redux/actions/ActionUser';
const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}
function Checkout(props) {
    const { userLogin } = useSelector(state => state.UserReducer);
    const { detailsRom, listChairDoingSeat } = useSelector(state => state.TicketReducer);
    const { thongTinPhim, danhSachGhe } = detailsRom;
    const dispatch = useDispatch();
    useEffect(() => {
        const { idCheckout } = props.match.params
        dispatch(getListRomTicketAction(idCheckout))

    }, [])
    const renderInfoFilm = () => {

        return <div className='col-lg-3'>
            <h5 className='price text-center'>{listChairDoingSeat.reduce((total, item, index) => {
                return total += item.giaVe;

            }, 0).toLocaleString()} đ</h5>
            <hr />
            <img className='info-img' src={thongTinPhim.hinhAnh} />
            <h3 className='name-movie' >{thongTinPhim.tenPhim}</h3>
            <p className='text'>Address : {thongTinPhim.diaChi} </p>
            <p className='text'>Date : {thongTinPhim.ngayChieu}</p>
            <hr></hr>
            <div className=' chair d-flex justify-content-between align-items-center'>
                <span className='chair-text'>Chair</span>
                <div className='chair-list'>
                    {_.sortBy(listChairDoingSeat, ['stt']).map((item, index) => {
                        return <span key={index} className='text-green'>{item.stt}</span>
                    })}
                </div>

            </div>
            <span className="chair-price">
                {listChairDoingSeat.reduce((total, item, index) => {
                    return total += item.giaVe;

                }, 0).toLocaleString()}
            </span>
            <hr />
            <div>
                <i>Email</i>
                <span className='ml-2'>{userLogin?.email}</span>
            </div>
            <div className='mt-3 mb-3'>
                <i>Phone</i>
                <span className='ml-2'>{userLogin?.soDT}</span>
            </div>
            <div >
                <Button onClick={() => {
                    const action = {
                        maLichChieu: props.match.params.idCheckout,
                        danhSachVe: listChairDoingSeat
                    }

                    dispatch(bookTicketAction(action))
                }} type='primary' htmlType='submit' className='' style={{ width: "100%" }}>Ticket</Button>
            </div>
        </div>

    }
    const renderSeatChair = () => {
        return danhSachGhe.map((item, index) => {
            let classChairOrVip = item.loaiGhe === "Vip" ? "book-chair--vip" : "";
            let classChairWasSeat = item.daDat === true ? "book-chair--seat" : "";
            let classChairDoingSeat = "";
            let indexChairDoingSeat = listChairDoingSeat.findIndex(chairDoSeat => chairDoSeat.maGhe === item.maGhe);
            if (indexChairDoingSeat != -1) {
                classChairDoingSeat = "book-chair-seat__doing"
            }
            return <Fragment key={index}>
                <button onClick={() => {
                    dispatch({
                        type: SET_TICKET,
                        chair: item
                    })
                }} className={`book-chair ${classChairDoingSeat} ${classChairOrVip} ${classChairWasSeat}`} key={index}>
                    {item.daDat === true ? <CloseOutlined /> : item.stt}
                </button>

                {/* {(index + 1) % 16 === 0 ? <br /> : ""} */}
            </Fragment>


        })
    }
    return (
        <div className='content-padding checkout'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-lg-9'>


                                <div className={`${style['trapezoid']} text-center`}>
                                    <h3 style={{ margin: 0, lineHeight: "50px", fontWeight: "bold" }}>Screen</h3>
                                </div>
                                <div className='mt-4 layout-book-chair '>
                                    {renderSeatChair()}
                                </div>


                            </div>
                            {renderInfoFilm()}

                        </div>
                        <div className='mt-5'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Chair have not Seat</th>
                                        <th>Chair doing Seat</th>
                                        <th>Chair VIP</th>
                                        <th>Chair was seat</th>
                                        <th>Chair Your</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <th >
                                        <button style={{ width: "35px", marginTop: "20px" }} className='book-chair '>00</button>
                                    </th>
                                    <th >
                                        <button style={{ width: "35px", marginTop: "20px" }} className=' book-chair book-chair-seat__doing '>00</button>
                                    </th>
                                    <th >
                                        <button style={{ width: "35px", marginTop: "20px" }} className=' book-chair book-chair--vip '>00</button>
                                    </th>
                                    <th >
                                        <button style={{ width: "35px", marginTop: "20px" }} className=' book-chair book-chair--seat '>00</button>
                                    </th>
                                    <th >
                                        <button style={{ width: "35px", marginTop: "20px" }} className=' book-chair book-chair--your '> <CheckOutlined /></button>
                                    </th>
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}
export default function (props) {
    return (
        <Tabs defaultActiveKey="1" onChange={callback} centered>
            <TabPane tab="Choose Chair and Pay" key="1">
                <Checkout {...props} />
            </TabPane>
            <TabPane tab="Result Ticket" key="2">
                <ResultTicket {...props} />
            </TabPane>

        </Tabs>
    )
}

function ResultTicket(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getInfoUserAction())
    }, [])
    return (
        <div className='p-5 row'>
            <div className='col-lg-4 col-md-3 col-sm-6 col-12'>
                <div className='card'>
                    <div className='card-img'>
                        <img />
                    </div>
                    <div className='card-text'>
                        <h5>ddf</h5>
                        <p>sdsdsdsd</p>
                    </div>
                </div>

            </div>
            <div className='col-lg-4 col-md-3 col-sm-6 col-12'>
                <div className='card'>
                    <div className='card-img'>
                        <img />
                    </div>
                    <div className='card-text'>
                        <h5>ddf</h5>
                        <p>sdsdsdsd</p>
                    </div>
                </div>

            </div>
            <div className='col-lg-4 col-md-3 col-sm-6 col-12'>
                <div className='card'>
                    <div className='card-img'>
                        <img />
                    </div>
                    <div className='card-text'>
                        <h5>ddf</h5>
                        <p>sdsdsdsd</p>
                    </div>
                </div>

            </div>
            <div className='col-lg-4 col-md-3 col-sm-6 col-12'>
                <div className='card'>
                    <div className='card-img'>
                        <img />
                    </div>
                    <div className='card-text'>
                        <h5>ddf</h5>
                        <p>sdsdsdsd</p>
                    </div>
                </div>

            </div>

        </div>
    )
}