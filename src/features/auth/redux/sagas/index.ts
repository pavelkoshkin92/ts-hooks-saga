import { call, put, takeEvery } from 'redux-saga/effects';
import {
    AUTH_LOGIN,
    AUTH_LOGIN_START,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_ERROR,
    LoginPayload
} from "../constants/types";

import { ActionPayloadRequired } from "../../../../constants/types";

import { signIn } from "../../../../api";

function* loginUser(action:ActionPayloadRequired<typeof AUTH_LOGIN, LoginPayload>) {
    try {
        const {login, password} = action.payload;
        yield put({type: AUTH_LOGIN_START});

        const user = yield call(signIn, login, password);
        yield put({type: AUTH_LOGIN_SUCCESS, payload: user});

    } catch (e) {
        yield put({type: AUTH_LOGIN_ERROR});
    }
}

export function* watchLoginUser() {
    yield takeEvery(AUTH_LOGIN, loginUser);
}
