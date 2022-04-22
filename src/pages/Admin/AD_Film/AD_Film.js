import React, { Fragment, useEffect } from 'react'
import { Table, Tag, Space, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getListMovieAction, removeMovieAction } from '../../../redux/actions/ActionAdmin';
import { NavLink } from 'react-router-dom';
import { CalendarOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { REMOVE_ITEM_FILM } from '../../../redux/contants/AdminContant';

export default function AD_Film() {
    const dispatch = useDispatch();
    const { arrFilm } = useSelector(state => state.AdminReducer);
    useEffect(() => {
        dispatch(getListMovieAction())
    }, [])
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            render: (text, record, index) => {
                return <span key={text}>{record.maPhim}</span>
            },
        },
        {
            title: 'Name',
            dataIndex: 'Name',
            key: 'name',
            render: (text, record, index) => {
                return <span key={text}>{record.tenPhim}</span>
            },
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (text, record, index) => {
                return <img style={{ width: "50px", height: "50px", objectFit: "cover" }} src={record.hinhAnh} />
            }
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            render: (text, record, index) => {
                return <Fragment>
                    {record.moTa.length > 50 ? record.moTa.substr(0, 50) + "..." : record.moTa}
                </Fragment>
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => {
                return <Fragment>
                    <NavLink to={`/admin/movie/edit/${record.maPhim}`}><EditOutlined /></NavLink>
                    <button className='ml-3' onClick={() => {
                        dispatch(removeMovieAction(record.maPhim))
                    }}><DeleteOutlined /></button>
                    <NavLink to={`/admin/movie/showTime/${record.maPhim}`}> <CalendarOutlined /></NavLink>
                </Fragment>
            }
        },
    ];


    return (
        <div>
            <Table columns={columns} dataSource={arrFilm} />;
        </div>
    )
}
