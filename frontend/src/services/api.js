import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333', // aqui precisa estar mapeado ip do servidor
});

export default api;