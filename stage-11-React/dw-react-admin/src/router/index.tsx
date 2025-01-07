import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from '../views/login';
import Welcome from '../views/welcome';
import NotFound from '../views/NotFound';
import LayoutCon from '../layout';
import Dashboard from '../views/dashboard';
import User from '../views/user';
import Depth from '../views/dept';
import Role from '../views/role';
import Menu from '../views/menu';

const router = createBrowserRouter([
  {
    element: <LayoutCon />,
    children: [{
      path: '/welcome',
      element: <Welcome />,
  },
  {
      path: '/dashboard',
      element: <Dashboard />,
  },
  {
      path: '/userList',
      element: <User />,
  },
  {
      path: '/deptList',
      element: <Depth />,
  },
  {
      path: '/menuList',
      element: <Menu />,
  },
  {
      path: '/roleList',
      element: <Role />,
  }],
  },
  { path: '/', element: <Navigate to="/welcome" /> },
  { path: '/login', element: <Login /> },
  { path: '*', element: <NotFound /> },
]);

export default router;
