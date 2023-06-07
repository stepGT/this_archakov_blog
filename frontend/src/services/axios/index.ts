import axios, { AxiosRequestConfig } from 'axios';

export interface AxiosResponse<T = never> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: AxiosRequestConfig<T>;
  request?: any;
}

const instance = axios.create({
  baseURL: 'http://localhost:4444',
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
});

export default instance;
