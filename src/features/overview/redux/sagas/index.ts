import {call, put, takeLatest} from 'redux-saga/effects';

import {
    OVERVIEW_GET_SUMMARY,
    OVERVIEW_GET_SUMMARY_START,
    OVERVIEW_GET_SUMMARY_SUCCESS,
    OVERVIEW_GET_SUMMARY_ERROR
} from "../constants/types";

import { fetchSummary } from "../../../../api";

function* getSummary() {
    try {
        yield put({type: OVERVIEW_GET_SUMMARY_START});

        const response = yield call(fetchSummary);
        yield put({type: OVERVIEW_GET_SUMMARY_SUCCESS, payload: response.data});

    } catch (e) {
        yield put({type: OVERVIEW_GET_SUMMARY_ERROR});
    }
}

export function* watchGetUserSummary() {
    yield takeLatest(OVERVIEW_GET_SUMMARY, getSummary);
}
