import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from '../views/login';
import NotFound from '../views/NotFound';
import AuthLoader from './AuthLoader';
import NotFound403 from '../views/403';
import Layout from '../layout';
import { lazyLoad } from './LazyLoad';
import { lazy } from 'react';

export const router = [
  {
      id: 'layout',
      element: <Layout />,
      loader: AuthLoader,
      children: [
          {
              path: '/welcome',
              element: lazyLoad(lazy(() => import('../views/welcome'))),
          },
          {
              path: '/dashboard',
              element: lazyLoad(lazy(() => import('../views/dashboard'))),
          },
          {
              path: '/userList',
              element: lazyLoad(lazy(() => import('../views/user'))),
              meta: {
                  auth: true,
              },
          },
          {
              path: '/deptList',
              element: lazyLoad(lazy(() => import('../views/dept'))),
              meta: {
                  requireAuth: true,
                  auth: true,
              },
          },
          {
              path: '/menuList',
              element: lazyLoad(lazy(() => import('../views/menu'))),
          },
          {
              path: '/roleList',
              element: lazyLoad(lazy(() => import('../views/role'))),
          },
      ],
  },
  { path: '/', element: <Navigate to="/welcome" /> },
  { path: '/login', element: <Login /> },
  { path: '/403', element: <NotFound403 /> },
  { path: '*', element: <NotFound /> },
];

export default createBrowserRouter(router);

