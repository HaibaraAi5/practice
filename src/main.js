import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueResource);
Vue.use(VueRouter);
//1.创建组件
import child from './child.vue'
import sibling from './sibling.vue'
import routers from './routers.vue'
import lif from './lif.vue'

//2.配置路由
const routes = [{
  path: '/child',
  component: child
}, {
  path: '/sibling',
  component: sibling
}, {
  path: '/routers',
  component: routers
}
, {
  path: '/lif',
  component: lif
}]

//3.实例化VueRouter
const router = new VueRouter({
  routes
})
//4.挂载路由
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
// 5.<router-view></router-view>放在app.vue中
//使用vue-resource请求数据的步骤
// 1.cnpm install vue-resource --save
// 2.在main.js中引入vue-resource
// 3.Vue.use(VueResource)
// 4.在组建中使用this.$http.get(api).then(response=>{
// })
