<template>
  <div id="content">
    <!-- dynamicRouter的详情页 -->
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    mounted(){
      console.log(this.$route.params);  //获取动态路由传值
    }
  }

</script>

<style>


</style>

