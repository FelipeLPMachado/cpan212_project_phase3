import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const loginUser = async (email, password) => {
    return api.post('/auth/login', { email, password });
};

export default api;
