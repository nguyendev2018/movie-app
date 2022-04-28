import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { SIGN_IN, SIGN_UP } from '../redux/contants/MovieContants';
import { userServices } from '../services/UserServices/UserServices';
import { history } from '../utils/history';
import { notification } from "antd"
import { LOGIN_LAYOUT, LOGIN_REDUCER } from '../redux/contants/UserContant';
// interator function
function* SignIn(action) {

    try {
        const { data } = yield call(() => userServices.signIn(action.values));

        yield put({
            type: LOGIN_REDUCER,
            data: data.content
        })
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
    yield takeLatest(LOGIN_LAYOUT, SignIn);
    yield takeLatest(SIGN_UP, SignUp)
}