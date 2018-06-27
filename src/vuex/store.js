import Vue from 'vue'
import Vuex from 'vuex'
/*state在vuex中用于存储数据*/
Vue.use(Vuex)
var state = {
  count: 1,
  list:[]
}
/*mutations里面放的是方法，方法主要用于改变state里面的数据 */
var mutations = {
  incCount() {
    ++state.count
  },
  //数据持久化
  addList(state,data){
    state.list.push(data)

  }
}
//getters:有点儿累死计算属性，改变state里面的count的时候回触发getters里面的方法获取新的值
var getters = {
  computedCount: (state) => {
    return state.count * 2
  }
}
/* Action 基本没有用
		Action 类似于 mutation，不同在于：
		Action 提交的是 mutation，而不是直接变更状态。
    Action 可以包含任意异步操作。*/
var actions = {
  incmutationsCount(context) { /*因此你可以调用context.commit 提交一个mutation*/
    context.commit('incCount') /*执行mutation里面的inCrement方法，改变state里面的数据*/
  }
}
const store = new Vuex.Store({
  state,
  mutations: mutations,
  getters,
  actions
})
export default store

//本项目在getContent.vue和routerModular.vue中使用
