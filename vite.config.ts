import {fileURLToPath, URL} from "node:url";
import {defineConfig, loadEnv} from "vite";
import vue from "@vitejs/plugin-vue";

const {resolve} = require("path");
// https://vitejs.dev/config/
// @ts-ignore
export default ({mode}) => {

  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    },
    server: {
      host: loadEnv(mode, process.cwd()).VITE_HOST,//192.168.2.22
      port: 5173,
      // 是否开启 https
      https: false,
      proxy: {
      }
    }

  });
}
