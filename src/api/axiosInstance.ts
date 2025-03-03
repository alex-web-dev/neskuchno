import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://api.nesqu123.site/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
