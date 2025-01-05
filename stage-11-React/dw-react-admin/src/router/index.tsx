import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from '../views/login';
import Welcome from '../views/welcome';
import NotFound from '../views/NotFound';

const router =createBrowserRouter([
  { path: '/', element: <Navigate to="/welcome" /> },
  { path: '/login', element: <Login /> },
  { path: '/welcome', element: <Welcome /> },
  { path: '*', element: <NotFound /> },
])

export default router;