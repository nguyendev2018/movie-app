import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { SIGN_IN, SIGN_UP } from '../redux/contants/MovieContants';
import { userServices } from '../services/UserServices/UserServices';
import { history } from '../utils/history';
import { notification } from "antd"
// interator function
function* SignIn(action) {

    try {
        const { data } = yield call(() => userServices.signIn(action.value));
        localStorage.setItem("ACCESS_TOKEN", data.content.accessToken);
        localStorage.setItem("DATA_USER", JSON.stringify(data.content))
        notification.info({
            message: `Login Success`,
        });
        yield delay(5000);
        history.push('/home')
    } catch (error) {
        notification.error({
            message: `Login Error`,
        });
        console.log(error);
    }
}
function* SignUp(action) {
    try {
        const { data } = yield call(() => userServices.signUp(action.value));
        console.log(data);
        notification.success({
            message: "Register Success"
        });
        yield delay(5000);
        history.push('/login')
    } catch (error) {
        notification.error({
            message: "Register Error"
        });
    }
}
export function* followUserSaga() {
    // listen last
    yield takeLatest(SIGN_IN, SignIn);
    yield takeLatest(SIGN_UP, SignUp)
}