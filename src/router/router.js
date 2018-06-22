import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 1.创建组件
import actionSheet from '../components/actionSheet.vue'
import child from '../components/child.vue'
import content from '../components/content.vue'
import dynamicRouter from '../components/dynamicRouter.vue'
import elementUi from '../components/elementUi.vue'
import getContent from '../components/getContent.vue'
import getRouter from '../components/getRouter.vue'
import infiniteScroll from '../components/infiniteScroll.vue'
import lif from '../components/lif.vue'
import MintUi from '../components/MintUi.vue'
import routerData from '../components/routerData.vue'
import routerModular from '../components/routerModular.vue'
import routers from '../components/routers.vue'
import sibling from '../components/sibling.vue'
import whoUse from '../components/whoUse.vue'
import user from '../components/user.vue'
import userAdd from '../model/user/userAdd.vue'
import userMsg from '../model/user/userMsg.vue'
import vuex from '../components/vuex.vue'
// 2.配置路由
const routes = [{
  path: '/child',
  component: child
}, {
  path: '/sibling',
  component: sibling
}, {
  path: '/routers',
  component: routers
}, {
  path: '/lif',
  component: lif
}, {
  path: '/routerModular',
  component: routerModular
}, {
  path: '/dynamicRouter',
  component: dynamicRouter
}, {
  path: '/content/:aid', // 动态路由  aid表示传值
  component: content
}, {
  path: '/getRouter',
  component: getRouter
}, {
  path: '/getContent',
  component: getContent
}, {
  path: '/whoUse',
  component: whoUse
}, {
  path: '/elementUi',
  component: elementUi
}, {
  path: '/actionSheet',
  component: actionSheet
}, {
  path: '/routerData',
  component: routerData
}, {
  path: '/MintUi',
  component: MintUi
}, {
  path: '/user',
  component: user,
  children: [{
    path: 'userAdd',
    component: userAdd
  }, {
    path: 'userMsg',
    component: userMsg
  }]
}, {
  path: '/infiniteScroll',
  component: infiniteScroll
},{
  path: '/vuex',
  component: vuex
}]

// 3.实例化VueRouter
const router = new VueRouter({
  // mode: 'history',hash模式改为history，比较麻烦
  routes
})
// 5.<router-view></router-view>放在app.vue中
// 使用vue-resource请求数据的步骤
// 1.cnpm install vue-resource --save
// 2.在main.js中引入vue-resource
// 3.Vue.use(VueResource)
// 4.在组建中使用this.$http.get(api).then(response=>{
// })
export default router
