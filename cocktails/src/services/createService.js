import * as request from '../lib/request';

const baseUrl = 'http://localhost:3000/create';

export const createCocktail = (name, image, ingredients, methodOfPreparation, userId ) => request.post(`${baseUrl}/register`, {
    name, 
    image, 
    ingredients, 
    methodOfPreparation,
    userId
});