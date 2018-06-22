<template>
  <div id="content">
    <!-- dynamicRouter的详情页 -->
    <h2>{{list.title}}</h2>
    <h4 v-html="list.content"></h4>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: []
      }
    },
    mounted() {
      console.log(this.$route.params); //获取动态路由传值
      var aid = this.$route.params.aid;
      this.requestData(aid)
    },
    methods: {
      requestData(aid) {
        var api1 = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=' + aid;
        this.$http.jsonp(api1).then((
          response) => {
          this.list = response.body.result[0]
        }, (err) => {
          console.log(err)
        })
      }
    }
  }

</script>

<style>


</style>
