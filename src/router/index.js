import { createRouter, createWebHistory } from "vue-router";

const viewContext = require.context("@/views", true, /.vue$/);

// 遍历生成路由
let routerArr = [];
viewContext.keys().forEach(value => {
  const path = value.substr(value.indexOf("/"), value.lastIndexOf(".") - 1);
  const componentLocation = value.substr(value.indexOf(".") + 1, value.lastIndexOf(".") - 1);
  const componentName = componentLocation.substr(componentLocation.lastIndexOf("/") + 1);
  routerArr.push({
    path: path,
    name: componentName,
    component: () => import(/* webpackChunkName: "alarm" */ `../views${componentLocation}`)
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
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;


