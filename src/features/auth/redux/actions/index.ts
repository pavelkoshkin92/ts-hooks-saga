import {
    AUTH_LOGIN,
    AUTH_LOGIN_START,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_ERROR,
    LoginPayload
} from "../constants/types";

import {ActionPayloadRequired} from "../../../../constants/types";

export const loginUser = (login: string, password: string): ActionPayloadRequired<typeof AUTH_LOGIN, LoginPayload> => ({
    type: AUTH_LOGIN,
    payload: {
        login,
        password
    }
})


