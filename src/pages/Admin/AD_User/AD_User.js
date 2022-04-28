import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Table, Tag, Space, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getListMovieAction, removeMovieAction } from '../../../redux/actions/ActionAdmin';
import { NavLink } from 'react-router-dom';
import { CalendarOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { REMOVE_ITEM_FILM } from '../../../redux/contants/AdminContant';
import { getUserAction, removeItemUserAction } from '../../../redux/actions/ActionUser';
import { Input } from 'antd';

export default function AD_User() {
    const { Search } = Input;
    const { arrUser } = useSelector(state => state.UserReducer);
    console.log(arrUser);
    const [keyword, setKeyword] = useState("");
    const searchRef = useRef(null)
    const onSearch = (value) => {
        dispatch(getUserAction(value))

    };
    const dispatch = useDispatch(

    );
    useEffect(() => {
        dispatch(getUserAction())
    }, [])
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            sorter: (item2, item1) => {
                return item2.id - item1.id;
            },
            sortDirections: ['descend'],
        },
        {
            title: 'UserName',
            dataIndex: 'userName',
            key: 'userName',
            render: (text, record, index) => {
                return <span>{record.taiKhoan}</span>
            }
        },
        {
            title: 'Email',
            dataIndex: 'Email',
            key: 'Email',
            render: (text, record, index) => {
                return <span>{record.email}</span>
            }
        },
        {
            title: 'matKhau',
            dataIndex: 'matKhau',
            key: 'matKhau',
            render: (text, record, index) => {
                return <span>{record.matKhau}</span>
            }
        },
        {
            title: ' Type User',
            dataIndex: 'typeUser',
            key: 'typeUser',
            render: (text, record, index) => {
                return <span>{record.maLoaiNguoiDung}</span>
            }
        }, {
            title: ' Action',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => {
                return <Fragment>
                    <span style={{ cursor: "pointer", marginRight: "20px" }} onClick={() => {
                        dispatch(removeItemUserAction(record.taiKhoan))
                    }}>
                        <DeleteOutlined></DeleteOutlined>
                    </span>
                    <NavLink to={`/admin/user/edit/${record.taiKhoan}`}><EditOutlined></EditOutlined></NavLink>
                </Fragment>
            }

        },
    ];

    const handleOnChangeSearch = (e) => {
        const { value } = e.target;
        if (searchRef.current) {
            clearTimeout(searchRef.current)
        }
        searchRef.current = setTimeout(() => {
            dispatch(getUserAction(value))
        }, 500)

    }
    return (
        <div>
            <Search placeholder="Search User" onChange={handleOnChangeSearch} trigger="click" />

            <Table className='mt-4' rowKey={"id"} columns={columns} dataSource={arrUser} />;
        </div>
    )
}
