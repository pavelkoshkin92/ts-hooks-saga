import { call, put, takeEvery } from 'redux-saga/effects'
import {
    AUTH_LOGIN,
    AUTH_LOGIN_START,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_ERROR,
    LoginPayload
} from "../constants/types";

import {ActionPayloadRequired} from "../../../../constants/types";

function* loginUser(action:ActionPayloadRequired<typeof AUTH_LOGIN, LoginPayload>) {
    try {
        const {login, password} = action.payload


    } catch (e) {

    }
}

export function* watchLoginUser() {
    yield takeEvery(AUTH_LOGIN, loginUser);
}
