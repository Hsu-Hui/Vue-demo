import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import About from '../views/About.vue'


Vue.use(Router)
/*
const router = new VueRouter({
  routes
})
*/
export default new Router({
  routes:[
    {
      path:'/',
      name:'home',
      component:Home,
      meta:{
        breadcrumb:[{
          name:'首頁'
        }]
      }
    },
    {
      path:'/news',
      name:'news',
      component:News,
      meta:{
        breadcrumb:[{
          name:'首頁',
          link:'home'
        },
        {
          name:'最新消息'
        }]
      }
    },
    {
      path:'/about',
      name:'about',
      component:About,
      meta:{
        breadcrumb:[{
          name:'首頁',
          link:'home'
        },
        {
          name:'關於我'
        }]
      }
    }
  ]
})
