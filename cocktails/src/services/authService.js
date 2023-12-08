import * as request from '../libs/requests';

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password,
    });

    return result;
};

export const register = (username, email, password, rePassword) => request.post(`${baseUrl}/register`, {
    username,
    email,
    password,
    rePassword
});

export const logout = () => request.get(`${baseUrl}/logout`);

export const getProfile = (userId) => request.get(`${baseUrl}/profile`, {
    userId
});

export const editProfile = (userId, username, email) => request.post(`${baseUrl}/profile/edit`, {
    userId,
    username, 
    email
});