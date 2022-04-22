import { Table, Tag, Space } from 'antd';

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserAction } from '../../../redux/actions/ActionUser';

export default function AD_User() {
    const { Column, ColumnGroup } = Table;
    const { arrUser } = useSelector(state => state.UserReducer);
    console.log(arrUser);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserAction())
    }, [])
    const columns = {
        tittle: "User Name",
        dataIndex: 'username'

    }
    return (
        <Table columns={columns} dataSource={arrUser}>


        </Table>
    )
}
