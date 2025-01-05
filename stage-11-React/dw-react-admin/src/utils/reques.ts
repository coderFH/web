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
  get: <T>(url: string, params?: any) => {
    return instance.get<T>(url, { params });
  },
  post: <T>(url: string, data?: any) => {
    return instance.post<T>(url, data);
  },
  put: <T>(url: string, data?: any) => {
    return instance.put<T>(url, data);
  },
  delete: <T>(url: string, data?: any) => {
    return instance.delete<T>(url, { data });
  },
};
