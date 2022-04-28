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
import Moment from 'react-moment';

import moment from 'moment'

import { getItemMovieAction, updateMovieAction } from '../../../../redux/actions/ActionAdmin';
import { GROUPID } from '../../../../utils/settingSystem';
const { TextArea } = Input;
const Edit_Film = (props) => {
    const [imgSrc, setImgSrc] = useState("");
    const { itemFilm } = useSelector(state => state.AdminReducer);
    console.log(itemFilm);
    const dispatch = useDispatch();
    useEffect(() => {
        let { movieId } = props.match.params;
        dispatch(getItemMovieAction(movieId))
    }, [])
    // FORMIK
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {

            tenPhim: itemFilm.tenPhim,
            trailer: itemFilm.trailer,
            moTa: itemFilm.moTa,
            ngayKhoiChieu: itemFilm.ngayKhoiChieu,
            dangChieu: itemFilm.dangChieu,
            sapChieu: itemFilm.sapChieu,
            hot: itemFilm.hot,
            danhGia: itemFilm.danhGia,
            maNhom: GROUPID,
            hinhAnh: null,

        },
        onSubmit: (values, { props }) => {
            // create object formData
            // post values from formik to formData
            let formData = new FormData;
            values.maNhom = GROUPID;
            for (let key in values) {
                if (key !== "hinhAnh") {
                    formData.append(key, values[key])
                } else {
                    if (values.hinhAnh !== null) {
                        // 3 types, name everyone, object file, name file
                        formData.append('File', values.hinhAnh, values.hinhAnh.name)
                    }

                }
            }
            // call api
            dispatch(updateMovieAction(formData))
        }
    })
    const handleChangeDatePicker = (value) => {
        let date = moment(value);
        formik.setFieldValue("ngayKhoiChieu", date)
    }
    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }
    const handleChangeFile = (e) => {
        // get file from e
        let file = e.target.files[0];
        // create object read file
        let reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = (e) => {
            setImgSrc(e.target.result);
        }
        formik.setFieldValue('hinhAnh', file)
    }
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
                <TextArea rows={4} name="moTa" value={formik.values.moTa} onChange={formik.handleChange} />

            </Form.Item>
            <Form.Item label="Premiere Date">
                <DatePicker name='ngayKhoiChieu' format="DD/MM/YYYY" value={moment(formik.values.ngayKhoiChieu)} onChange={handleChangeDatePicker} />
            </Form.Item>
            <Form.Item label="Now Show">
                <Switch checked={formik.values.dangChieu} onChange={handleChangeSwitch("dangChieu")} />
            </Form.Item>
            <Form.Item label="Comming Soon" >
                <Switch checked={formik.values.sapChieu} onChange={handleChangeSwitch("sapChieu")} />
            </Form.Item>
            <Form.Item label="Hot" >
                <Switch checked={formik.values.hot} onChange={handleChangeSwitch("hot")} />
            </Form.Item>
            <Form.Item label="Number Star">
                <InputNumber value={formik.values.danhGia} onChange={handleChangeSwitch("danhGia")} />
            </Form.Item>
            <Form.Item label="Upload file">
                <Input type="file" onChange={handleChangeFile} />
                <img className="mt-3" style={{ objectFit: "cover" }} width={150} height={150} src={imgSrc == "" ? itemFilm.hinhAnh : imgSrc} />

            </Form.Item>
            <Form.Item >
                <button className='btn btn-primary' type="submit primary"   >Send</button>
            </Form.Item>
        </Form>
    );

}

export default Edit_Film