import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import electron from "vite-plugin-electron";
import electronRenderer from 'vite-plugin-electron-renderer'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import pkg from './package.json'
import fs from 'fs'
const optimizeDepsElementPlusIncludes = ["element-plus/es"];
fs.readdirSync("node_modules/element-plus/es/components").map((dirname) => {
  fs.access(
      `node_modules/element-plus/es/components/${dirname}/style/css.mjs`,
      (err) => {
          if (!err) {
              optimizeDepsElementPlusIncludes.push(
                  `element-plus/es/components/${dirname}/style/css`
              );
          }
      }
  );
});
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isServe = command === 'serve'
  const isBuild = command === 'build'
  const sourcemap = false
  return {
    base: './',
    resolve: {
      alias: {
        "@": resolve(__dirname, "src")
      },
    },
    optimizeDeps: {
      include: optimizeDepsElementPlusIncludes,
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      electron([
        {
          // Main-Process entry fi4le of the Electron App.
          entry: 'electron/main/index.ts',
          onstart(options) {
            if (process.env.VSCODE_DEBUG) {
              console.log(/* For `.vscode/.debug.script.mjs` */'[startup] Electron App')
            } else {
              options.startup()
            }
          },
          vite: {
            build: {
              sourcemap,
              minify: isBuild,
              outDir: 'dist-electron/main',
              rollupOptions: {
                external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
              },
            },
          },
        },
        {
          entry: 'electron/preload/index.ts',
          onstart(options) {
            // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete, 
            // instead of restarting the entire Electron App.
            options.reload()
          },
          vite: {
            build: {
              sourcemap,
              minify: isBuild,
              outDir: 'dist-electron/preload',
              rollupOptions: {
                external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
              },
            },
          },
        }
      ]),
      electronRenderer({
        nodeIntegration: true,
      })
    ],
    build: {
      outDir: resolve(__dirname, 'build'), // ????????????
      emptyOutDir: false, // ????????????????????? outDir ??? root ??????????????? Vite ??????????????????????????????
    },
    server: {
      host: '0.0.0.0', //?????????ip??????
      port:4000
    },
    clearScreen: false,
  }
})
