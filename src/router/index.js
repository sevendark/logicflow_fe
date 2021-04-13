import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: function () {
      return import('../views/Home.vue')
    }
  },
  {
    path: '/MyTask',
    name: 'MyTask',
    component: function () {
      return import('../views/MyTask.vue')
    }
  },
  {
    path: '/StoryList',
    name: 'StoryList',
    component: function () {
      return import('../views/StoryList.vue')
    }
  },
  {
    path: '/MyProfile',
    name: 'MyProfile',
    component: function () {
      return import('../views/MyProfile.vue')
    }
  },
  {
    path: '/RequirementMagage',
    name: 'RequirementMagage',
    component: function () {
      return import('../views/RequirementMagage.vue')
    }
  },
  {
    path: '/RequirementDetail/:requirementId',
    name: 'RequirementDetail',
    component: function () {
      return import('../views/RequirementDetail.vue')
    }
  },
  {
    path: '/Tickets',
    name: 'Tickets',
    component: function () {
      return import('../views/Tickets.vue')
    }
  },
  {
    path: '/UserGroup',
    name: 'UserGroup',
    component: function () {
      return import('../views/UserGroup.vue')
    }
  },
  {
    path: '/Users',
    name: 'Users',
    component: function () {
      return import('../views/Users.vue')
    }
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

export default router
