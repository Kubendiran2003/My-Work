import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000/api/recipes' });

export const getRecipes = () => API.get('/');
export const getRecipeById = (id) => API.get(`/${id}`);
export const createRecipe = (recipe) => API.post('/', recipe);
export const updateRecipe = (id, recipe) => API.put(`/${id}`, recipe);
export const deleteRecipe = (id) => API.delete(`/${id}`);
