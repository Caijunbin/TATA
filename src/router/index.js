import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Forum from '../components/Forum.vue'
import Post from '../components/Forum/Post.vue'
import fabu from '../components/Forum/fabu.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Forum',
    component: Forum,
    children: [
      {
        path: 'fabu',
        component: fabu
      }, {
        path: 'Post',
        component: Post
      }]
  }
  ]
})
