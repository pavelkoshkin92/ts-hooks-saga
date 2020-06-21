import {
    SessionState,
    AUTH_LOGIN,
    AUTH_LOGIN_START,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_ERROR,
    AUTH_LOGOUT
} from "../constants/types";

import { ActionPayloadOptional } from "../../../../constants/types";

const initialState: SessionState = {
    username: null,
    userId: null,
    done: true
};

export const authReducer = (
    state: SessionState = initialState,
    action: ActionPayloadOptional<string, any>
): SessionState => {
    switch (action.type) {
        case AUTH_LOGIN_START: return {...state, done: false};
        case AUTH_LOGIN_SUCCESS: return {...state, ...action.payload, done: true};
        case AUTH_LOGOUT: return {...state, ...initialState};
        default: return state;
    }
}
