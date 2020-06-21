import API from './api.core';

interface SignUpApiResponse {
    username: string,
    userId: number
}

interface ErrorResponse {
    code: number
}

export const signIn = (login: string, password: string): Promise<SignUpApiResponse | ErrorResponse> => {
    return Promise.resolve({
        username: login,
        userId: Math.random() * 100
    })
}
