import React, { Fragment, useEffect } from 'react'
import { Table, Tag, Space, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getListMovieAction, removeMovieAction } from '../../../redux/actions/ActionAdmin';
import { NavLink } from 'react-router-dom';
import { CalendarOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { REMOVE_ITEM_FILM } from '../../../redux/contants/AdminContant';
import { Popconfirm, message } from 'antd';
import { Input } from 'antd';

export default function AD_Film() {
    const { Search } = Input;
    const dispatch = useDispatch();
    const { arrFilm } = useSelector(state => state.AdminReducer);
    useEffect(() => {
        dispatch(getListMovieAction())
    }, [])
    const onSearch = value => {
        dispatch(getListMovieAction(value))
    };
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
                    <NavLink to={`/admin/movie/edit/${record.maPhim}`}> <EditOutlined /></NavLink>
                    <Popconfirm
                        title="Are you sure to delete this project?"
                        onConfirm={() => {
                            dispatch(removeMovieAction(record.maPhim))
                        }}

                        okText="Yes"
                        cancelText="No"
                    >
                        <span style={{ cursor: "pointer" }} htmlType='submit' className='ml-3 mr-3' >
                            <DeleteOutlined style={{ fontSize: 17 }} />
                        </span>
                    </Popconfirm>

                    {/* <span style={{ cursor: "pointer" }} htmlType='submit' className='ml-3 mr-3' onClick={() => {
                        dispatch(removeMovieAction(record.maPhim))
                    }} ><DeleteOutlined /></span> */}
                    <NavLink to={`/admin/movie/showTime/${record.maPhim}`}> <CalendarOutlined /></NavLink>
                </Fragment>
            }
        },
    ]


    return (
        <div>
            <Search placeholder="input search text" onSearch={onSearch} enterButton />

            <Table className='mt-4' columns={columns} dataSource={arrFilm} />
        </div>
    )
}
