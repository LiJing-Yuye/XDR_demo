/* eslint-disable */
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'
import { menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8, menu9, menu10, menu11, menu12, menu13, menu14, menu15, menu16 } from '@/core/icons'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: '/security',
    children: [
      // dashboard
      {
        path: '/security',
        name: 'security',
        component: () => import('@/views/demo/EndPoint'),
        meta: { title:'dashboard',icon: menu1, keepAlive: true, permission: ['dashboard'] }
      },

      // forms
      {
        path: '/menu2',
        redirect: '/menu2/identity',
        component: () => import('@/views/demo/EndPoint'),
        meta: { title: 'identity risk', icon: menu2, keepAlive: true, permission: ['form'] }
      },

      // list
      {
        path: '/menu3',
        name: 'list',
        component: () => import('@/views/demo/EndPoint'),
        meta: { title: 'detection', icon: menu3, keepAlive: true, permission: ['table'] }
      },

      // profile
      {
        path: '/menu4',
        name: 'profile',
        component: () => import('@/views/demo/EndPoint'),
        meta: { title: 'base', icon: menu4, permission: ['profile'] }
      },

      // result
      {
        path: '/menu5',
        name: 'result',
        component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
        meta: { title: 'detectionModel',icon: menu5, keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
      },

      // account
      {
        path: '/menu6',
        component: RouteView,
        name: 'threat',
        component: () => import('@/views/demo/EndPoint'),
        meta: { title: 'threatIntellegence', icon: menu6,  keepAlive: true, permission: ['user'] }
      },
      {
        path: '/menu7',
        name: 'menu7',
        component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
        meta: { title: 'workbench', icon: menu7, keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
      },
      {
        path: '/menu8',
        name: 'menu8',
        component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
        meta: { title: 'Observed Attact Techniques', icon: menu8, keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
      },
      {
        path: '/menu9',
        name: 'menu9',
        component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
        meta: { title: 'Search',icon: menu9, keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
      },
      {
        path: '/menu10',
        name: 'menu10',
        component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
        meta: { title: 'responseManagement',icon: menu10,  keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }        
      },
      {
        path: '/menu11',
        name: 'menu13',
        component: RouteView,
        redirect: '/menu13/endpoint',
        meta: { title: 'endpoint', icon:menu11, permission: ['result'] },
        children: [
          {
            path: '/menu13/endpoint',
            name: 'ResultSuccess',
            component: () => import(/* webpackChunkName: "result" */ '@/views/demo/XDR'),
            meta: { title: 'Endpoint Inventory', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
          },
          {
            path: '/menu13/email',
            name: 'email',
            component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
            meta: { title: 'Email Account Inventory', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
          },
          {
            path: '/menu13/network',
            name: 'network',
            component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
            meta: { title: 'Network Inventory', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
          }
        ]
      },
      {
        path: '/menu14',
        name: 'menu14',
        component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
        meta: { title: 'help', icon: menu14, keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }       
      },
      {
        path: '/menu15',
        name: 'menu15',
        component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
        meta: { title: 'tool',icon: menu15, keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
      },
      {
        path: '/menu16',
        name: 'menu16',
        component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
        meta: { title: 'more', icon:menu16, keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }
]
