import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/system',
    component: Layout,
    redirect: '/system',
    name: 'System',
    meta: { title: 'C/S Management', icon: 'el-icon-s-tools' },
    children: [
      {
        path: 'course',
        name: 'Course',
        component: () => import('@/views/course'),
        meta: { title: 'Course', icon: 'el-icon-menu' }
      },
      {
        path: 'student',
        name: 'Student',
        component: () => import('@/views/student'),
        meta: { title: 'Student', icon: 'el-icon-user-solid' }
      }
    ]
  },

  {
    path: '/system',
    component: Layout,
    redirect: '/system',
    name: 'System',
    meta: { title: 'S/R Management', icon: 'el-icon-s-tools' },
    children: [
      {
        path: 'subject',
        name: 'Subject',
        component: () => import('@/views/subject'),
        meta: { title: 'Subject', icon: 'el-icon-menu' }
      },
      {
        path: 'result',
        name: 'Result',
        component: () => import('@/views/result'),
        meta: { title: 'Result', icon: 'el-icon-user-solid' }
      }
    ]
  },

  {
    path: '/system',
    component: Layout,
    redirect: '/system',
    name: 'System',
    meta: { title: 'D/E Management', icon: 'el-icon-s-tools' },
    children: [
      {
        path: 'dept',
        name: 'Dept',
        component: () => import('@/views/dept'),
        meta: { title: 'Department', icon: 'el-icon-menu' }
      },
      {
        path: 'emp',
        name: 'Emp',
        component: () => import('@/views/emp'),
        meta: { title: 'Employee', icon: 'el-icon-user-solid' }
      }
    ]
  },

  {
    path: '/system',
    component: Layout,
    redirect: '/system',
    name: 'System',
    meta: { title: 'H/T Management', icon: 'el-icon-s-tools' },
    children: [
      {
        path: 'hostel',
        name: 'Hostel',
        component: () => import('@/views/hostel'),
        meta: { title: 'Hostel', icon: 'el-icon-menu' }
      },
      {
        path: 'tenant',
        name: 'Tenant',
        component: () => import('@/views/tenant'),
        meta: { title: 'Tenant', icon: 'el-icon-user-solid' }
      }
    ]
  },

  {
    path: '/',
    component: Layout,
    redirect: '/operatelog',
    children: [{
      path: 'operatelog',
      name: 'Operatelog',
      component: () => import('@/views/operatelog'),
      meta: { title: 'Monitor', icon: 'el-icon-s-tools' }
    }]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
