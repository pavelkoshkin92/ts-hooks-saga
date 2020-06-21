import {
    AUTH_LOGIN,
    AUTH_LOGOUT,
    LoginPayload
} from "../constants/types";

import {ActionPayloadRequired} from "../../../../constants/types";
import {Action} from "redux";

export const loginUser = (login: string, password: string): ActionPayloadRequired<typeof AUTH_LOGIN, LoginPayload> => ({
    type: AUTH_LOGIN,
    payload: {
        login,
        password
    }
});

export const logoutUser = (): Action<typeof AUTH_LOGOUT> => ({type: AUTH_LOGOUT});


