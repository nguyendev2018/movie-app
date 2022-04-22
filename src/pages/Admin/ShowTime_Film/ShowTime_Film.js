import { Button, DatePicker, Form, InputNumber, Select } from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClusterTheaterAction, getInforSystemMovieAction, postformCalendarAction } from '../../../redux/actions/ActionAdmin';
import { theaterServices } from '../../../services/TheaterServices/TheaterServices';


export default function ShowTime_Film(props) {
    const dispatch = useDispatch();
    const { arrTheater } = useSelector(state => state.AdminReducer);

    const { arrCluster } = useSelector(state => state.AdminReducer);
    const formik = useFormik({
        initialValues: {
            maPhim: props.match.params.movieId,
            ngayChieuGioChieu: "",
            maRap: "",
            giaVe: ""
        },
        onSubmit: async (value) => {
            console.log(value);
            try {
                const result = await theaterServices.createCalendar(value);
                console.log(result);
            } catch (error) {
                console.log(error.response.data);
            }
        }
    })
    useEffect(() => {
        dispatch(getInforSystemMovieAction())
    }, [])
    const renderSystem = () => {
        return arrTheater?.map((item, index) => {
            return {
                label: item.tenHeThongRap,
                value: item.maHeThongRap,

            }

        })

    }
    const renderCluster = () => {
        return arrCluster.map((item, index) => {
            return {
                label: item.tenCumRap,
                value: item.maCumRap,
            }
        })
    }
    const handleChangeSystemTheater = (value) => {
        dispatch(getClusterTheaterAction(value))
    }
    //
    const handleChangeDate = (value) => {
        const date = moment(value).format("DD/MM/YYYY hh:mm:ss");
        formik.setFieldValue("ngayChieuGioChieu", date)
    }
    const handleChangeClusterTheater = (value) => {
        formik.setFieldValue("maRap", value)
    }
    const handleChangeNumber = (value) => {
        formik.setFieldValue("giaVe", value)
    }
    return (
        <Form onSubmitCapture={formik.handleSubmit}>
            <h3 className=''> Create Calendar :</h3>
            <Form.Item label="System Theater">
                <Select name="" options={renderSystem()} onChange={handleChangeSystemTheater} placeholder="Please select" />,
            </Form.Item>
            <Form.Item label="Cluster Theater">
                <Select options={renderCluster()} onChange={handleChangeClusterTheater} placeholder="Please select" />,
            </Form.Item>
            <Form.Item label="Date Theater">
                <DatePicker name='ngayChieuGioChieu' format="DD/MM/YYYY hh:mm:ss" showTime onChange={handleChangeDate} placeholder="Please select" />,
            </Form.Item>
            <Form.Item label="Price">
                <InputNumber name='giaVe' onChange={handleChangeNumber} />
            </Form.Item>
            <Button htmlType='submit' type='primary'>Create </Button>
        </Form>
    )
}
