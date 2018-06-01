import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
new Vue({
  el: '#app',
  render: h => h(App)
})
//使用vue-resource请求数据的步骤
// 1.cnpm install vue-resource --save
// 2.在main.js中引入vue-resource
// 3.Vue.use(VueResource)
// 4.在组建中使用this.$http.get(api).then(response=>{
// })
