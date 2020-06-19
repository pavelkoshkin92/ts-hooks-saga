import API from './api.core';

interface SignUpApiResponse {
    username: string,
    userId: number
}

interface SignUpApiResponseError {
    code: number
}

export const signIn = (login: string, password: string): Promise<SignUpApiResponse | SignUpApiResponseError> => {
    return Promise.resolve({
        username: login,
        userId: Math.random() * 100
    })
}
