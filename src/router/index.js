import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  //设备列表
  {
    path: '/Equipment_list',
    name: 'Equipment_list',
    component: () => import('../views/Commercial_Tenants/Equipment/Equipment_list')
  },
  //设备运营配置
  {
    path: '/Equipment_Configure',
    name: 'Equipment_Configure',
    component: () => import('../views/Commercial_Tenants/Equipment/Equipment_Configure')
  },
  //
  {
    path: '/Equipment_Code',
    name: 'Equipment_Code',
    component: () => import('../views/Commercial_Tenants/Equipment/Equipment_Code')
  },
  //商品添加
  {
    path: '/Goods_Add',
    name: 'Goods_Add',
    component: () => import('../views/Commercial_Tenants/Goods/Goods_Add')
  },
  
  //商品列表
  {
    path: '/Goods_List',
    name: 'Goods_List',
    component: () => import('../views/Commercial_Tenants/Goods/Goods_List')
  },
  //商品修改
  {
    path: '/Goods_Update',
    name: 'Goods_Update',
    component: () => import('../views/Commercial_Tenants/Goods/Goods_Update')
  },
  //登陆
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  //添加商户
  {
    path: '/Member_Add',
    name: 'Member_Add',
    component: () => import('../views/MemberManagement/Member_Add')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
