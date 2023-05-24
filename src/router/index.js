import { createRouter, createWebHashHistory } from "vue-router";
import path from 'path'
//const viewContext = require.context("@/views", true, /.vue$/);
const viewContext = import.meta.glob('@/views/**/*/*.vue')
// 遍历生成路由
let routerArr = [];



Object.keys(viewContext).forEach(dest => {
  const reComponentName = /[^\/]*.vue/g
  const reViewPath = /views.*/g
  const path = dest.match(reViewPath)[0].split('/').slice(1).join('/').replace('.vue', '');
  const componentLocation = dest.match(reViewPath)[0]
  const componentName = dest.match(reComponentName)[0].split('.')[0];
  routerArr.push({
    path: `/${path}`,
    name: componentName,
    component: () => import(dest /* @vite-ignore */)
  });
});

//合并公共路由以及重定向规则
const routes = [
  {
    path: "/",
    redirect: { name: "basic-basic-component" }
  },
  ...routerArr,
  {
    path: "/",
    component: () => import("@/views/404.vue")
  }
];


const router =createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL || "/vue3-drag-resize-rotate/"),
  routes
});

export default router;


