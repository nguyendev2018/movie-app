import React, { useEffect, useState } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { getItemUserAction, getTypeUser, UpdateItemUserAction } from '../../../../redux/actions/ActionUser';
import { GROUPID } from '../../../../utils/settingSystem';
export default function Edit_User(props) {
    const dispatch = useDispatch();
    const { ItemUser } = useSelector(state => state.UserReducer);
    const typeUser = useSelector(state => state.UserReducer.typeUser);
    const { Option } = Select;

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: ItemUser.email,
            taiKhoan: ItemUser.taiKhoan,
            hoTen: ItemUser.hoTen,
            matKhau: ItemUser.matKhau,
            soDt: ItemUser.soDt,
            maNhom: GROUPID,
            maLoaiNguoiDung: ItemUser.maLoaiNguoiDung

        },
        onSubmit: (values) => {
            dispatch(UpdateItemUserAction(values))

        }
    })
    useEffect(() => {
        let { taiKhoan } = props.match.params;
        dispatch(getItemUserAction(taiKhoan))
        dispatch(getTypeUser())
    }, [])
    const handleChangeSelect = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }
    return (
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            onSubmitCapture={formik.handleSubmit}
        >

            <Form.Item label="Email">
                <Input name='email' value={formik.values.email} onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="UserName">
                <Input name='taiKhoan' value={formik.values.taiKhoan} onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Name">
                <Input name='hoTen' value={formik.values.hoTen} onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Password">
                <Input name='matKhau' value={formik.values.matKhau} onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Phone">
                <Input name='soDt' value={formik.values.soDt} onChange={formik.handleChange} />
            </Form.Item>

            <Form.Item label="Type User">
                <Select name="maLoaiNguoiDung" value={formik.values.maLoaiNguoiDung} onChange={handleChangeSelect("maLoaiNguoiDung")} >
                    {typeUser?.map((item, index) => {
                        return <option value={item.maLoaiNguoiDung} key={index}>{item.tenLoai}</option>
                    })}
                </Select>
            </Form.Item>
            <Form.Item>
                <Button htmlType='submit'>Update</Button>
            </Form.Item>

        </Form>
    )

}
