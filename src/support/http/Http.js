import axios from 'axios';

const client = axios.create({
  baseURL: process.env.API_URL ? process.env.API_URL : 'https://backend.com.br',
});

export default client;
