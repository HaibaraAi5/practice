import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router/router.js'
import VueSchart from 'vue-schart'
//mint-ui的使用
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//引入公共样式  注意：创建项目的时候必须用scss
import './assets/css/basic.css'
// elementUi的使用
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(MintUI)
Vue.use(ElementUi)
Vue.use(VueResource)
Vue.use(VueSchart)
// 4.挂载路由
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
