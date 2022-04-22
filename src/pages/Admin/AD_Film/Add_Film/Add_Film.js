import { useFormik, withFormik } from 'formik'

import React, { useState } from 'react'
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
import { getItemMovieAction, postItemMovieAction } from '../../../../redux/actions/ActionAdmin';
import moment from 'moment';
import { GROUPID } from '../../../../utils/settingSystem';
const { TextArea } = Input;
export default function Add_Film() {
    // Image
    const [imgSrc, setImgSrc] = useState("");
    const dispatch = useDispatch();
    // FORMIK'

    const formik = useFormik({
        initialValues: {
            tenPhim: "",
            trailer: "",
            moTa: "",
            ngayKhoiChieu: "",
            dangChieu: false,
            sapChieu: false,
            hot: false,
            danhGia: 0,
            hinhAnh: {}
        },
        onSubmit: (value) => {
            let formData = new FormData;
            value.maNhom = GROUPID
            for (let key in value) {
                if (key !== "hinhAnh") {
                    formData.append(key, value[key])
                    //key
                    //value in key
                    console.log(value[key]);
                }
                else {
                    formData.append("File", value.hinhAnh, value.hinhAnh.name)
                }
            }
            dispatch(postItemMovieAction(formData))
        }

    })
    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }
    const handleChangeDatePicker = (value) => {
        let date = moment(value).format("DD/MM/YYYY");

        formik.setFieldValue("ngayKhoiChieu", date)

    }
    const handleChangeFile = (e) => {

        // get file from e
        let fileName = e.target.files[0];
        // // create object read file
        let reader = new FileReader();
        console.log(reader);
        reader.readAsDataURL(fileName)
        reader.onload = (e) => {
            setImgSrc(e.target.result);
        }
        formik.setFieldValue('hinhAnh', fileName)
    }
    return (
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            onSubmitCapture={formik.handleSubmit}>
            <Form.Item label="Name"  >
                <Input name="tenPhim" onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Trailer">

                <Input name='trailer' onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Description">
                <TextArea rows={4} name="moTa" onChange={formik.handleChange} />

            </Form.Item>
            <Form.Item label="Premiere Date">
                <DatePicker format="DD/MM/YYYY" name='ngayKhoiChieu' onChange={handleChangeDatePicker} />
            </Form.Item>
            <Form.Item label="Now Show">
                <Switch onChange={handleChangeSwitch("dangChieu")} />
            </Form.Item>
            <Form.Item label="Comming Soon" >
                <Switch onChange={handleChangeSwitch("sapChieu")} />
            </Form.Item>
            <Form.Item label="Hot" >
                <Switch onChange={handleChangeSwitch("hot")} />
            </Form.Item>
            <Form.Item label="Number Star">
                <InputNumber min={1} max={10} onChange={handleChangeSwitch("danhGia")} />
            </Form.Item>
            <Form.Item label="Upload file">
                <Input type="file" onChange={handleChangeFile} />
                <img style={{ objectFit: "cover", marginTop: "20px" }} width={150} height={150} src={imgSrc} />
            </Form.Item>
            <Form.Item >
                <Button htmlType='submit' className='btn btn-primary' type="submit primary"   >Send</Button>
            </Form.Item>
        </Form>
    )
}
