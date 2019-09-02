import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.43.109:3333', // aqui precisa estar mapeado ip do servidor
});

export default api;