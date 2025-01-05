import { ILoginParams } from '../types/api';
import reques from '../utils/reques';

export default {
  login(params: ILoginParams) {
    return reques.post('/users/login', params);
  },
};
