import * as request from '../lib/request';

const baseUrl = 'http://localhost:3000/cocktails';

export const getAllCocktail = () => request.get(`${baseUrl}`);

export const getOneCocktail = (cocktailId) => request.get(`${baseUrl}/${cocktailId}`,{
    cocktailId
});

export const editCocktail = (cocktailId, name, image, ingredients, methodOfPreparation) => 
request.put(`${baseUrl}/${cocktailId}/edit`, {
    name, 
    image, 
    ingredients, 
    methodOfPreparation
});

export const deleteCocktail = (cocktailId, userId) => request.remove(`${baseUrl}/${cocktailId}/delete`, {
    userId
});

export const getCocktailsByOwner = (userId) => request.get(`${baseUrl}/${userId}/cocktails`);