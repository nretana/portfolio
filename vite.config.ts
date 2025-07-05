import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { imageToWebpPlugin } from 'vite-plugin-image-to-webp';
//import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
//import { visualizer } from 'rollup-plugin-visualizer';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import UnpluginInjectPreload from 'unplugin-inject-preload/vite';
import { viteStaticCopy} from 'vite-plugin-static-copy';


// https://vite.dev/config/
export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return defineConfig({
    plugins: [
      react(),
      imageToWebpPlugin(),
      //cssInjectedByJsPlugin(),
      UnpluginInjectPreload({
        files: [
          {
            entryMatch: /.*\.(woff2|.woff)$/,
            attributes: {
              type: 'font/woff2',
              as: 'font',
              crossorigin: 'anonymous', //include this, otherwise, the preload doesn't work
            },
          },
        ],
      }),
      /*visualizer({
      filename: './dist/bundle-analysis.html', // Output file
      open: true, // Automatically open in browser after build
      gzipSize: true, // Show gzipped sizes
    }),*/
      ViteImageOptimizer({
        svg: {
          plugins: [{ name: 'removeViewBox' }, { name: 'sortAttrs' }],
        },
      }),
      viteStaticCopy({
        targets: [
          { src: 'CNAME', dest: '' }
        ]
      })
    ],
    assetsInclude: ['**/*.{jpg,jpeg}'],
    /* css: {
    modules: {
      generateScopedName: '[name]-[local]-[hash:base64:5]'
    }
  }, */
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
        '@assets': path.join(__dirname, 'src/assets'),
      },
    },
    build: {
      sourcemap: false,
      emptyOutDir: true,
      outDir: 'dist',
      assetsDir: 'assets'
      /* rollupOptions: {
      output: {
        manualChunks(id) {
          //create separated files for dependencies
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
    }, */
    },
    base: `./`,
  });
};
