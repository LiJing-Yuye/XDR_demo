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
        meta: { title:'Security Posture',icon: menu1, keepAlive: true, permission: ['dashboard'] }
      },

      // forms
      {
        path: '/menu2',
        redirect: '/menu2/identity',
        component: () => import('@/views/demo/EndPoint'),
        meta: { title: 'Identity and Risk Insights(Preview)', icon: menu2, keepAlive: true, permission: ['form'] }
      },

      // list
      {
        path: '/menu3',
        name: 'list',
        component: () => import('@/views/demo/EndPoint'),
        meta: { title: 'Detection Model Management', icon: menu3, keepAlive: true, permission: ['table'] }
      },

      // profile
      {
        path: '/menu4',
        name: 'profile',
        component: () => import('@/views/demo/EndPoint'),
        meta: { title: 'Threat Intelliengce', icon: menu4, permission: ['profile'] }
      },

      // result
      {
        path: '/menu5',
        name: 'result',
        component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
        meta: { title: 'Workbench',icon: menu5, keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
      },

      // account
      {
        path: '/menu6',
        component: RouteView,
        name: 'threat',
        component: () => import('@/views/demo/EndPoint'),
        meta: { title: 'Observed Attact Techniques ', icon: menu6,  keepAlive: true, permission: ['user'] }
      },
      {
        path: '/menu7',
        name: 'menu7',
        component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
        meta: { title: 'Search', icon: menu7, keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
      },
      {
        path: '/menu8',
        name: 'menu8',
        component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
        meta: { title: 'Response Management', icon: menu8, keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
      },
      {
        path: '/menu9',
        name: 'menu9',
        component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
        meta: { title: 'Managed XDR',icon: menu9, keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
      },
      {
        path: '/menu10',
        name: 'menu10',
        meta: { title: 'mobile',icon: menu10,  keepAlive: false,  permission: ['result'] },       
        component: RouteView,
        redirect: '/menu10/mobile',
        children: [
          {
            path: '/menu10/mobile',
            name: 'mobile',
            component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
            meta: { title: 'Mobile Inventory(Preview)', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
          },
          {
            path: '/menu10/detec',
            name: 'detec',
            component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
            meta: { title: 'Mobile Detection Logs(Preview)', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
          },
          {
            path: '/menu10/policy',
            name: 'ploicy',
            component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
            meta: { title: 'Mobile Policy(Preview)', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
          }
        ]
      },
      {
        path: '/menu11',
        name: 'menu11',
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
        path: '/menu12',
        name: 'menu12',
        component: RouteView,
        redirect: '/menu12/sign',
        meta: { title: 'setting', icon:menu13, permission: ['result'] },
        children: [
          {
            path: '/menu12/sign',
            name: 'sign',
            component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
            meta: { title: 'Single Sign-On', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
          },
          {
            path: '/menu12/directory',
            name: 'directory',
            component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
            meta: { title: 'Directory Sync (Preview)', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
          },
          {
            path: '/menu12/account',
            name: 'account',
            component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
            meta: { title: 'User Accounts', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
          },
          {
            path: '/menu12/role',
            name: 'role',
            component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
            meta: { title: 'User Roles', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
          },
          {
            path: '/menu12/connect',
            name: 'connect',
            component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
            meta: { title: 'Product Connector', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
          },
          {
            path: '/menu12/notifiy',
            name: 'notifiy',
            component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
            meta: { title: 'Alert Notifications', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
          },
          {
            path: '/menu12/log',
            name: 'log',
            component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
            meta: { title: 'Audit Logs', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
          },
          {
            path: '/menu12/support',
            name: 'support',
            component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
            meta: { title: 'Remote Support', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
          },
          {
            path: '/menu12/license',
            name: 'license',
            component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
            meta: { title: 'License Information', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
          }
        ]
      },
      {
        path: '/menu14',
        name: 'menu14',
        component: RouteView,
        redirect: '/menu14/help',
        meta: { title: 'endpoint', icon:menu14, permission: ['result'] },
        children: [
          {
            path: '/menu14/help',
            name: 'Help',
            component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
            meta: { title: 'Help', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
          },
          {
            path: '/menu14/online',
            name: 'onlinehelp',
            component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
            meta: { title: 'Online Help', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
          },
          {
            path: '/menu14/contact',
            name: 'contact',
            component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
            meta: { title: 'Contact Support', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
          },
          {
            path: '/menu14/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "result" */ '@/views/demo/EndPoint'),
            meta: { title: 'About', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
          }
        ]
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
        meta: {title:'more',icon:menu16, keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }
]
