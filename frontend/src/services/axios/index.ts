import axios, { AxiosRequestConfig } from 'axios';

export interface AxiosResponse<T = never> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: AxiosRequestConfig<T>;
  request?: any;
}
console.log(`${location.protocol}//${location.hostname}:4444`)
const instance = axios.create({
  baseURL: `${location.protocol}//${location.hostname}:4444`,
  //baseURL: 'http://stepgt.ru:4444',
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
});

export default instance;
