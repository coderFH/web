import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ConfigProvider, theme } from 'antd';
import { useStore } from './store';



function App() {
  const isDark = useStore((state) => state.isDark);

  return (
    <ConfigProvider
        theme={{
            token: {
                colorPrimary: '#1677ff',
            },
            algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
    >
        <RouterProvider router={router} />; 
    </ConfigProvider>
);
}

export default App;
