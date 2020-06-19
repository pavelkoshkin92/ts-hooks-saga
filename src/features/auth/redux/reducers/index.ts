import {
    SessionState,
    SessionActions,
    AUTH_LOGIN,
    AUTH_LOGOUT
} from "../constants/types";

const initialState: SessionState = {
    username: null,
    userId: null
};

export const authReducer = (state: SessionState = initialState, action: SessionActions): SessionState => {
    switch (action.type) {
        case AUTH_LOGIN: return {...state, ...action.payload};
        case AUTH_LOGOUT: return {...state, ...initialState};
        default: return state;
    }
}
