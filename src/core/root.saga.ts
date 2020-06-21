import {all} from 'redux-saga/effects';
import {watchLoginUser} from "../features/auth/redux/sagas";

export default function* rootSaga() {
    yield all([
        watchLoginUser()
    ])
};
