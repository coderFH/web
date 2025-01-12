import { Layout, Watermark } from 'antd';
import styles from './index.module.less';
import {
  Navigate,
  Outlet,
  useLocation,
  useRouteLoaderData,
} from 'react-router-dom';
import NavHeader from './header';
import Footer from './footer';
import SiberMenu from './menu';
import { useEffect } from 'react';
import { useStore } from '../store';
import api from '../api';
import { searchRoute } from '../utils';
import { router } from '../router';

const { Sider } = Layout;

export default function LayoutCon() {
  const { collapsed, updateUserInfo } = useStore();

  const { pathname } = useLocation();

  useEffect(() => {
    getUserInfoData();
  }, []);
  const getUserInfoData = async () => {
    const data = await api.getUserInfo();
    updateUserInfo(data);
  };

  const data = useRouteLoaderData('layout');
  const staticPathList = ['/welcome', '/403', '/404'];

  const route = searchRoute(pathname, router);
  console.log(route, '-----');
  /*
  {
      path: '/deptList',
      element: lazyLoad(lazy(() => import('../views/dept'))),
      meta: {
          requireAuth: true,
          auth: true,
      },
  },
  如果路由中有额外的配置信息,比如以上例子,可以这么拦截
  */
  if (route && route.meta?.auth) {
    // 需要鉴权 处理自己的逻辑
  }
  if (
    !data.menuPathList.includes(pathname) &&
    !staticPathList.includes(pathname)
  ) {
    return <Navigate to="/403" />;
  }

  return (
    <Watermark content="React 19">
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <SiberMenu />
        </Sider>
        <Layout>
          <NavHeader />
          <div className={styles.content}>
            <div className={styles.wrapper}>
              <Outlet />
            </div>
            <Footer />
          </div>
        </Layout>
      </Layout>
    </Watermark>
  );
}
