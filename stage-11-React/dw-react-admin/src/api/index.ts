import {
  ICreateMenuParams,
  ICreateUserParams,
  IDept,
  IDeptSearchParams,
  ILoginParams,
  IMenu,
  ISearchParams,
  IUpdateMenuParams,
  IUpdateUserParams,
  IUser,
  IUserSearchParams,
  ResultData,
} from '../types/api';
import request from '../utils/request';

export default {
  login(params: ILoginParams) {
    return request.post('/users/login', params);
  },

  // 获取用户列表
  getUserList(params: IUserSearchParams) {
    return request.get<ResultData<IUser>>('/users/list', params);
  },
  // 创建用户
  createUser(params: ICreateUserParams) {
    return request.post('/users/create', params);
  },
  // 创建用户
  editUser(params: IUpdateUserParams) {
    return request.post('/users/edit', params);
  },
  // 删除和批量删除用户
  delUser(params: { userIds: number[] }) {
    return request.post('/users/delete', params);
  },

  // 获取部门列表
  getDeptList(params?: IDeptSearchParams) {
    return request.get<IDept[]>('/dept/list', params);
  },
  // 添加部门
  createDept(params: IDept) {
    return request.post('/dept/create', params);
  },
  // 修改部门
  updateDept(params: IDept) {
    return request.post('/dept/edit', params);
  },
  // 删除部门
  deleteDept(params: { _id: string }) {
    return request.post('/dept/delete', params);
  },
  getAllUserList() {
    return request.get<IUser[]>('/users/all/list');
  },
  // 获取角色
  getRoleList() {
    return request.get('/roles/list');
  },

  // 菜单模块
  // 创建菜单参数
  createMenu(params: ICreateMenuParams) {
    return request.post('/menu/create', params);
  },
  // 更新菜单参数
  updateMenu(params: IUpdateMenuParams) {
    return request.post('/menu/edit', params);
  },
  // 菜单list
  getMenuList(params?: ISearchParams) {
    return request.get<IMenu[]>('/menu/list', params);
  },
  // 删除菜单
  deleteMenu(params: { _id: string }) {
    return request.post('/menu/delete', params);
  },
};
