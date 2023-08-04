import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index'
import {createPinia} from 'pinia'
// @ts-ignore

// @ts-ignore
import piniaPluginPersist from 'pinia-plugin-persist' //引入pinia数据持久化插件


// import VConsole from 'vconsole';

// // 或者使用配置参数进行初始化
// const vConsole = new VConsole({ theme: 'dark' });
//

// // 调用 console 方法输出日志
// console.log('Hello world');
//
// // 完成调试后，可销毁 vConsole
// vConsole.destroy();


const app = createApp(App)
app.use(createPinia().use(piniaPluginPersist))//安装插件

// const app = createApp(App)
app.use(router)
// app.config.globalProperties.$api = api;
app.mount('#app')


// app.use(router)


// app.mount('#app')
