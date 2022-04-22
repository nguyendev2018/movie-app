import { withFormik } from 'formik'
import React from 'react'
import { connect } from 'react-redux'
import { SIGN_IN } from '../../../redux/contants/MovieContants';
import * as Yup from 'yup';

function Login(props) {
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
                <h2>Sign in</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-item">
                        <i className="fal fa-user icon" />
                        <input type="text" className="input-control" name='taiKhoan' onChange={handleChange} placeholder="UserName" />
                        <p style={{ color: "red", textAlign: "left", marginTop: '10px' }}>{errors.taiKhoan}</p>
                    </div>
                    <div className="input-item ">
                        <i className="fal fa-lock-alt icon" />
                        <input type="password" className="input-control" name='matKhau' onChange={handleChange} placeholder="Password" />
                        <p style={{ color: "red", textAlign: "left", marginTop: '10px' }}>{errors.matKhau}</p>
                    </div>
                    <div className="form-check form-check-auth">
                        <input className="form-check-input" type="checkbox" defaultValue id="remember me" />
                        <label className="form-check-label" htmlFor="remember me" style={{ fontSize: 15 }}>
                            Remember me
                        </label>
                    </div>
                    <a href className="forgot ">Forgot password ? </a>
                    <button className="button-form">
                        <span> Sign in</span>
                    </button>
                    <div className="form-bottom">
                        <p className="text-center mt-3">Or join with</p>
                        <ul className="list-icon">
                            <li className="item-icon"><a href><i className="fab fa-google-plus-g" /></a></li>
                            <li className="item-icon"><a href><i className="fab fa-twitter" /></a></li>
                            <li className="item-icon"><a href><i className="fab fa-facebook-f" /></a></li>
                        </ul>
                        <a href="" class="text-form">Sign up!</a>
                        <span>Not a number yet? </span>
                    </div>
                </form>
            </div>
        </div>


    )
}
const LoginWithFormik = withFormik({
    mapPropsToValues: () => ({
        taiKhoan: "",
        matKhau: ""
    }),
    validationSchema: Yup.object({

        taiKhoan: Yup.string()
            .required("Required!"),
        matKhau: Yup.string()
            .min(4, "Minimum 4 characters")
            .required("Required!"),

    }),
    handleSubmit: (value, { props }) => {

        props.dispatch({
            type: SIGN_IN,
            value
        })
    }
})(Login)
export default connect()(LoginWithFormik)
// "taiKhoan": "nguyendev",
// "matKhau": "123456",
// "email": "nguyendevcoder001@gmail.com",
// "soDt": "121212",
// "maNhom": "GP00",
// "hoTen": "nguyen thi "
//Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibmd1eWVuZGV2IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoibmd1eWVuZGV2Y29kZXIwMDFAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIktoYWNoSGFuZyIsIm5ndXllbmRldmNvZGVyMDAxQGdtYWlsLmNvbSIsIkdQMDAiXSwibmJmIjoxNjUwMzgwNjc2LCJleHAiOjE2NTAzODQyNzZ9.d5uVnFFbs_fwF-TYoQx5FVmBkb1w_JNwHwQAFQhnyqY