import axios from 'axios';

const API = axios.create({ baseURL: import.meta.env.VITE_URL });

export const logIn = (formData) => API.post("/login", formData);
export const signUp = (formData) => API.post("/register", formData);