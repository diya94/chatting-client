import axios from 'axios';

const API = axios.create({ baseURL: import.meta.env.VITE_URL });

export const uploadImage = (data) => API.post('/upload/', data);
export const uploadPost = (data) => API.post('/post', data);