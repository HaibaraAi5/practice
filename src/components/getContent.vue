<template>
  <div id="getContent">
    我是getContent--{{this.$store.state.count}}--{{this.$store.getters.computedCount}}
    <br>
    <button @click="incCount()">增加数量</button>
    <ul>
      <li v-for="item in list">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
  import store from '../vuex/store.js';

  export default {
    data() {
      return {
        list: []
      }
    },
    store,
    mounted() {
      //获取get传值
      console.log(this.$route.query);
      var listData = this.$store.state.list;
      if (listData.length > 0) {
        this.list = listData
      } else {
        this.requestD()
      }
    },
    //get请求跨域的话  后台里面也要允许跨域
    methods: {
      incCount() {
        //改变vuex store 里面的数据
        this.$store.commit('incCount') /*触发state里面的数据*/
        this.$store.dispatch('incmutationsCount') /*触发action里面的方法*/
      },
      requestD() {
        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
        this.$http.get(api).then((response) => { // console.log(response)
          this.list = response.body.result
          this.$store.commit("addList", response.body.result)
        }, (err) => {
          console.log(err)
        })
      }
    }
  }

</script>

<style>


</style>
