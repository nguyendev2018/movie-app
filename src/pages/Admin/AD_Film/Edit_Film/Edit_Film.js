import { useFormik, withFormik } from 'formik'

import React, { useEffect, useState } from 'react'
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
import { connect, useDispatch, useSelector } from 'react-redux';
import { getItemMovieAction } from '../../../../redux/actions/ActionAdmin';
const { TextArea } = Input;

const Edit_Film = (props) => {

    const { itemFilm } = useSelector(state => state.AdminReducer);
    console.log(itemFilm);
    const dispatch = useDispatch();
    useEffect(() => {
        let { movieId } = props.match.params;
        dispatch(getItemMovieAction(movieId))
    }, [])
    // FORMIK
    const formik = useFormik({
        initialValues: {
            tenPhim: itemFilm.tenPhim,
            trailer: itemFilm.trailer,
            moTa: itemFilm.moTa,
            ngayKhoiChieu: itemFilm.ngayKhoiChieu,
            dangChieu: itemFilm.dangChieu,
            sapChieu: itemFilm.sapChieu,
            hot: itemFilm.hot,
            danhGia: itemFilm.danhGia,
            hinhAnh: null,

        },
        onSubmit: (value, { props }) => {
            console.log(value);
        }
    })
    return (
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            onSubmitCapture={formik.handleSubmit}>
            <Form.Item label="Name"  >
                <Input name="tenPhim" value={formik.values.tenPhim} onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Trailer">

                <Input name='trailer' value={formik.values.trailer} onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Description">
                <TextArea rows={4} name="moTa" value={formik.values.moTa} />

            </Form.Item>
            <Form.Item label="Premiere Date">
                <DatePicker name='ngayKhoiChieu' />
            </Form.Item>
            <Form.Item label="Now Show">
                <Switch />
            </Form.Item>
            <Form.Item label="Comming Soon" valuePropName="checked">
                <Switch />
            </Form.Item>
            <Form.Item label="Hot" valuePropName="checked">
                <Switch />
            </Form.Item>
            <Form.Item label="Number Star">
                <InputNumber />
            </Form.Item>
            <Form.Item label="Upload file">
                <Input type="file" />
            </Form.Item>
            <Form.Item >
                <button className='btn btn-primary' type="submit primary"   >Send</button>
            </Form.Item>
        </Form>
    );

}

export default Edit_Film