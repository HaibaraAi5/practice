<template>
  <div id="getContent">
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    mounted() {
      //获取get传值
      console.log(this.$route.query)

    },
    //get请求跨域的话  后天里面也要允许跨域
    methods: {
    }
  }

</script>

<style>


</style>
