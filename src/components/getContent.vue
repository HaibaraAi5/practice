<template>
  <div id="getContent">
    我是getContent--{{this.$store.state.count}}--{{this.$store.getters.computedCount}}
    <br>
    <button @click="incCount()">增加数量</button>
  </div>
</template>

<script>
  import store from '../vuex/store.js';

  export default {
    data() {
      return {
      }
    },
    store,
    mounted() {
      //获取get传值
      console.log(this.$route.query)

    },
    //get请求跨域的话  后天里面也要允许跨域
    methods: {
      incCount() {
        //改变vuex store 里面的数据
        this.$store.commit('incCount') /*触发state里面的数据*/
      }
    }
  }

</script>

<style>


</style>
