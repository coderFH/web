import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';
import fs from 'fs';

const preloadPaths = [
  'src/views/user/index.tsx',
  'src/views/role/index.tsx',
  'src/views/dept/index.tsx',
];
const prefetchUrls: string[] = [];

function prefetchUrlsPush() {
  const manifestPath = path.resolve('', 'dist/.vite/manifest.json');
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    preloadPaths.forEach((item) => {
      const itemPath = manifest[item].file;
      if (itemPath) {
        prefetchUrls.push('/' + itemPath);
      }
    });
  }
}
prefetchUrlsPush();
export const PrefetchLayzPlugins = (path: string[] = []) => {
  return {
    name: 'vite-plugin-prefetch-lazy',
    transformIndexHtml(html: string) {
      if (!path.length) return;
      let prefetchstr = '';
      path.forEach((item) => {
        prefetchstr += `<link rel="prefetch" href="${item}" as="script">`;
      });
      return html.replace('</head>', prefetchstr + '</head>');
    },
  };
};

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://apifoxmock.com/m1/2568825-1598557-default',
        changeOrigin: true,
      },
    },
  },
  build: {
    manifest: true
  },
  plugins: [
    react(),
    PrefetchLayzPlugins(prefetchUrls),
    visualizer({
      open: true, // 构建后自动打开报告
    }),
  ],
});
