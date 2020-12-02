import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '/',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // Pages
        {
          name: 'User Profile',
          path: 'pages/user',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },
        {
          name: 'Time Line',
          path: 'pages/timeline',
          component: () => import('@/views/dashboard/pages/Timeline'),
        },
        {
          name: 'RTL',
          path: 'pages/rtl',
          component: () => import('@/views/dashboard/pages/Rtl'),
        },
        {
          name: 'Settings',
          path: 'pages/settings',
          component: () => import('@/views/dashboard/pages/Settings'),
        },

        {
          name: 'Notifications',
          path: 'components/notifications',
          component: () => import('@/views/dashboard/component/Notifications'),
        },
        {
          name: 'Icons',
          path: 'components/icons',
          component: () => import('@/views/dashboard/component/Icons'),
        },
        {
          name: 'Typography',
          path: 'components/typography',
          component: () => import('@/views/dashboard/component/Typography'),
        },
        // Tables
        {
          name: 'Existing Cars',
          path: 'tables/existing-cars',
          component: () => import('@/views/dashboard/tables/ExistingCars'),
        },
        {
          name: 'Registered Cars',
          path: 'tables/registered-cars',
          component: () => import('@/views/dashboard/tables/RegisteredCars'),
        },
        {
          name: 'Transactions',
          path: 'tables/transactions',
          component: () => import('@/views/dashboard/tables/Transactions'),
        },
        {
          name: 'Invoices',
          path: 'tables/Invoices',
          component: () => import('@/views/dashboard/tables/Invoices'),
        },
        // Maps
        {
          name: 'Google Maps',
          path: 'maps/google-maps',
          component: () => import('@/views/dashboard/maps/GoogleMaps'),
        },
        // Upgrade
        {
          name: 'Upgrade',
          path: 'upgrade',
          component: () => import('@/views/dashboard/Upgrade'),
        },
      ],
    },
    {
      path: '/login',
      component: () => import('@/views/dashboard/auth/login_r'),
    },
  ],
})
