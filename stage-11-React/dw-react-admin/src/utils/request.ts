import { message } from 'antd';
import axios from 'axios';
import storage from './storage';

const api = import.meta.env.VITE_BASE_URL;
const instance = axios.create({
  baseURL: api,
  timeout: 3000,
  timeoutErrorMessage: '请求超时',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + storage.get('token'),
    'x-requested-with': 'XMLHttpRequest',
  },
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    const data = response.data;
    if (data.code === 4001) {
      window.location.href = '/login';
    } else if (data.code !== 200) {
      message.error(data.msg);
    }
    return data.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default {
  get<T>(url: string, params?: object): Promise<T> {
    return instance.get(url, { params });
  },
  post<T>(url: string, params?: object): Promise<T> {
    return instance.post(url, params);
  },
  put<T>(url: string, params?: object): Promise<T> {
    return instance.put(url, params);
  },
  delete<T>(url: string, params?: object): Promise<T> {
    return instance.delete(url, { params });
  },
};
