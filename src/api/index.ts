import API from './api.core';

interface SignUpApiResponse {
    username: string,
    userId: number
}

interface ErrorResponse {
    code: number
}

export const signIn = (login: string, password: string): Promise<SignUpApiResponse | ErrorResponse> => {
    return new Promise((res, rej) => {
        setTimeout(() => res({
            username: login,
            userId: Math.floor(Math.random() * 100)
        }), 1500)
    })
}
