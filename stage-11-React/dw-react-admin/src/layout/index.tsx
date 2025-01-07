import { Layout } from 'antd';
import styles from './index.module.less';
import { Outlet } from 'react-router-dom';
import NavHeader from './header';
import Footer from './footer';
import { useStore } from '../store';
import SiberMenu from './menu';

const { Sider } = Layout;

export default function LayoutCon() {
  const { collapsed } = useStore();
  
  return (
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
  );
}
