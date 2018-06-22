import Vue from 'vue'
import Vuex from 'vuex'
/*state在vuex中用于存储数据*/
Vue.use(Vuex)
var state = {
  count: 1
}
/*mutations里面放的是方法，方法主要用于改变state里面的数据 */
var mutations = {
  incCount() {
    ++state.count
  }
}
//getters:有点儿累死计算属性，改变state里面的count的时候回触发getters里面的方法获取新的值
var getters={
  computedCount:(state)=>{
    return state.count*2
  }
}
const store = new Vuex.Store({
  state,
  mutations: mutations,
  getters
})
export default store

//本项目在getContent.vue和routerModular.vue中使用
