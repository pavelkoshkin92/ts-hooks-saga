export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

interface SessionCreatePayload {
    username: string,
    userId: string
}

export interface SessionState {
    username: string | null,
    userId: string | null
}

interface SessionCreateAction {
    type: typeof AUTH_LOGIN,
    payload: SessionCreatePayload
}

interface SessionLogoutAction {
    type: typeof AUTH_LOGOUT,
}

export type SessionActions = SessionCreateAction | SessionLogoutAction;
