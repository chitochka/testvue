import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '../views/HomePage.vue'
import store from '../store/'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    // meta: { 
    //   requiresAuth: true
    // }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: "*",
    component: { render: (h) => h("div", ["404! Page Not Found!"]) },
  },
  /*
  ,
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ /* '../views/AboutView.vue')
  }
  */
]




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



router.beforeEach((to, from, next) => {
  if(to.matched.some(path => path.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})


export default router
