# vue3 + ts + vite + vant 移动端开发模板

原版搭建地址：[vue3使用vite2移动端项目](https://zhuanlan.zhihu.com/p/351888882)

[Vite](https://cn.vitejs.dev/)

## 模板集成

- [X] vite版本
- [X] vue3
- [X] ts
- [X] 集成路由
- [X] 集成vuex
- [X] 集成axios
- [X] 配置Vant3
- [X] 移动端适配
- [X] 请求代理

## 开始

安装：
```sh
npm install
```

启动：
```sh
npm run dev
```

## vite项目初始化

```sh
npm init @vitejs/app my-vue-app --template vue-ts
```

## vite 配置

添加 `@types/node`：
```sh
npm install @types/node --dev
```

修改 `vite.config.ts` 文件，添加别名和代理:
```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    open: true,
    proxy: {
      '/zym/api': 'http://localhost:3003',
    },
    cors: true,
  },
  plugins: [vue()],
})
```

## 组件库按需加载

[vite-plugin-imp](https://www.npmjs.com/package/vite-plugin-imp)

```sh
npm i vite-plugin-imp -D
```

配置 `vite.config.js`：

```js
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImp from 'vite-plugin-imp'

export default defineConfig({
  plugins: [
    vue(), 
    vitePluginImp({
      libList: [
        {
          libName: 'vant',
          style(name) {
            if (/CompWithoutStyleFile/i.test(name)) {
              // This will not import any style file 
              return false
            }
            return `vant/es/${name}/index.css`
          }
        },
        {
          libName: 'ant-design-vue',
          style(name) {
            if (/popconfirm/.test(name)) {
              // support multiple style file path to import
              return [
                'ant-design-vue/es/button/style/index.css',
                'ant-design-vue/es/popover/style/index.css'
              ]
            }
            return `ant-design-vue/es/${name}/style/index.css`
          }
        },
        {
          libName: 'element-plus',
          style: (name) => {
            return`element-plus/lib/theme-chalk/${name}.css`
          }
        }
      ]
    })
  ]
})
```

## 配置路由

[vue-router](https://next.router.vuejs.org/introduction.html)

```sh
npm install vue-router@4 --save
```

新建 `router/indexts` 文件，配置路由：
```ts
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home/index.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
    },
    component: Home,
  },
  {
    path: '/detail',
    name: 'Detail',
    meta: {
      title: '详情',
    },
    component: () => import('@/views/Detail/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
```

注册：
```ts
import router from "./router";
app.use(router)
```

## 配置 vuex

[vuex@next](https://next.vuex.vuejs.org/)

```sh
npm install vuex@next --save
```

新建 `router/indexts` 文件，配置仓库：
```ts
import { createStore } from 'vuex'

export interface IState {
  num: number
}

export default createStore<IState>({
  state: {
    num: 0,
  },
  mutations: {
    addNum(state, value) {
      state.num = value
    },
  },
  actions: {
    addNum(context, value) {
      context.commit('addNum', value)
    },
  },
  modules: {},
})
```

注册：
```ts
import store from "./store";
app.use(store)
```

## 移动端适配

安装 `postcss-pxtorem` 和 `amfe-flexible`。

配置 px 自动转 rem

```sh
npm install postcss-pxtorem -D
```

根目录新建 `postcss.config.js`，输入如下配置：
```js
module.exports = {
  "plugins": {
    "postcss-pxtorem": {
      rootValue: 37.5, // Vant 官方根字体大小是 37.5
      propList: ['*'],
      selectorBlackList: ['.norem'] // 过滤掉.norem-开头的class，不进行rem转换
    }
  }
}
```

配置 `amfe-flexible`:

```sh
npm install amfe-flexible -D
```

main.ts 引入
```js
import 'amfe-flexible'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
.use(router)
.use(store)
.use(ant)
.mount('#app')
```

`index.html` 添加：
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
```


