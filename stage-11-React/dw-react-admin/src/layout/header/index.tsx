import { Button, Dropdown, MenuProps, Switch } from 'antd';
import styles from './index.module.less';
import storage from '../../utils/storage';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useStore } from '../../store';
import BreadCrumb from './BreadCrumb';

export default function NavHeader() {
  const { collapsed, updateCollapsed, isDark, updateTheme } = useStore();
  const items: MenuProps['items'] = [
    {
      key: 'email',
      label: '邮箱：henry.wong@gami.com',
    },
    {
      key: 'logout',
      label: '退出',
    },
  ];
  const onClick = ({ key }: { key: string }) => {
    if (key === 'logout') {
      // 退出登录
      storage.remove('token');
      window.location.href = '/login';
    }
  };
  const toggleCollapsed = () => {
    updateCollapsed();
  };

  const handlerSwitch = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.dataset.theme = 'dark';
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.dataset.theme = 'light';
      document.documentElement.classList.remove('dark');
    }
    updateTheme(isDark);
  };

  return (
    <div className={styles.navHeader}>
      <div className={styles.left}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={toggleCollapsed}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
        <BreadCrumb />
      </div>
      <div className={styles.right}>
        <Switch
          checkedChildren="暗黑"
          unCheckedChildren="默认"
          checked={isDark}
          onChange={handlerSwitch}
        />
        <Dropdown menu={{ items, onClick }} trigger={['click']}>
          <span className={styles.nickName}>Henry</span>
        </Dropdown>
      </div>
    </div>
  );
}
