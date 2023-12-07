import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/create';

export const register = (name, image, ingredients, methodOfPreparation ) => request.post(`${baseUrl}/register`, {
    name, 
    image, 
    ingredients, 
    methodOfPreparation 
});