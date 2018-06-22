<template>
  <div id="routerData">
    <ul>
      <li v-for="(item,key) in getRouterData">
        <router-link :to="'/content/'+item.aid">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  //路由请求数据
  export default {
    data() {
      return {
        getRouterData: []
      }
    },
    methods: {
      //jsonp请求的话  后台api要支持jsonp请求
      requestData() {
        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1'
        this.$http.jsonp(api).then((response) => {
          this.getRouterData = response.body.result
        }, (err) => {
          console.log(err)
        })
      }
    },
    mounted() {
      this.requestData()
    }
  }

</script>
