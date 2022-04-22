import { withFormik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { SIGN_UP } from '../../../redux/contants/MovieContants';

function Register(props) {
    const {
        values,
        handleSubmit,
        handleChange,
        errors
    } = props
    return (
        <div className="login general-body mobile content-margin" id="login">
            <div className="general-body--left">
            </div>
            <div className="general-body--right">
                <h2>Sign up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-item">

                        <i className="fal fa-user icon" />
                        <input type="text" className="input-control" name='taiKhoan' onChange={handleChange} placeholder="userName" />
                        <p style={{ color: "red", textAlign: "left", marginTop: '10px' }}>{errors.taiKhoan}</p>
                    </div>
                    <div className="input-item ">

                        <i className="fal fa-lock-alt icon" />
                        <input type="text" className="input-control" name='hoTen' onChange={handleChange} placeholder="First Name" />
                        <p style={{ color: "red", textAlign: "left", marginTop: '10px' }}>{errors.hoTen}</p>
                    </div>
                    <div className="input-item ">

                        <i className="fal fa-lock-alt icon" />
                        <input type="text" className="input-control" name='email' onChange={handleChange} placeholder="Email" />
                        <p style={{ color: "red", textAlign: "left", marginTop: '10px' }}>{errors.email}</p>
                    </div>
                    <div className="input-item ">

                        <i className="fal fa-lock-alt icon" />
                        <input type="password" className="input-control" name='passWord' onChange={handleChange} placeholder="Password" />
                        <p style={{ color: "red", textAlign: "left", marginTop: '10px' }}>{errors.password}</p>
                    </div>

                    <div className="input-item ">

                        <i className="fal fa-lock-alt icon" />
                        <input type="number" className="input-control" name='soDt' onChange={handleChange} placeholder="Phone" />
                        <p style={{ color: "red", textAlign: "left", marginTop: '10px' }}>{errors.sdt}</p>
                    </div>
                    <button className="button-form">
                        <span> Sign up</span>
                    </button>
                </form>
            </div>
        </div>


    )
}
const RegisterWithFormik = withFormik({
    mapPropsToValues: () => ({
        taiKhoan: "",
        matKhau: "",
        email: "",
        sdt: "",
        hoTen: ""
    }),

    handleSubmit: (value, { props }) => {
        props.dispatch({
            type: SIGN_UP,
            value
        })
    }
})(Register)
export default connect()(RegisterWithFormik)