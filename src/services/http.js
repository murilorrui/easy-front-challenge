import axios from 'axios';
import store from '@/store';

export default class HttpBuilder {
  constructor() {
    const baseUrl = '/api';

    const instance = axios.create({
      baseURL: baseUrl,
    });

    instance.interceptors.request.use((config) => {
      const { token } = store.getters;
      config.headers.Authorization = `Bearer ${token}`;

      return config;
    });

    return instance;
  }
}
