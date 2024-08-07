const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/IndexPage.vue') }
  //   ]
  // },
  {
    path:'/',
    component:() => import('pages/AzanTimeBoard.vue')
  },
  {
    path:'/mobile',
    component: () => import('components/AzanTimeApp.vue')
  },
  {
    path:'/time',
    component: () => import('components/AzantimeApp2.vue')
  },
  {
    path:'/location',
    component: () => import('components/LocationFind.vue')
  }, {
    path:'/date',
    component: () => import('components/DynamicDate.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
