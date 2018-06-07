<template>
  <div id="dynamicRouter">
    <ul>
      <li v-for="(item,key) in listRouter"><router-link :to="'/content/'+key">{{key}}--{{item}}</router-link></li>
    </ul>
  </div>
</template>

<script>

  /*
  一：第一种传值方法
  1.配置动态路由
  routes:[
    //动态路径参数  以冒号开头
    {path:'/user/:id',component:User}
  ]
  2.在对应的页面
  this.$route.params获取动态路由的值
  二：第二种get传值
  */
  export default{
    data(){
      return{
        listRouter:['111','222','333']
      }
    }
  }
</script>

<style>

</style>
