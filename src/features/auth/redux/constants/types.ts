export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGIN_START = 'AUTH_LOGIN_START';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_ERROR = 'AUTH_LOGIN_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export interface LoginPayload {
    login: string,
    password: string
}

export interface SessionState {
    isAuthenticated: boolean,
    username: string | null,
    userId: string | null,
    done: boolean
}


